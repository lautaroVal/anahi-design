import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const AIRTABLE_TOKEN = process.env.AIRTABLE_TOKEN || ''
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID || ''
const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME || 'Contactos'

const EMAIL_USER = process.env.GMAIL_USER || ''
const EMAIL_PASSWORD = process.env.GMAIL_PASSWORD || ''

async function saveToAirtable(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  if (!AIRTABLE_TOKEN || !AIRTABLE_BASE_ID) {
    console.warn('Airtable configuration missing, skipping save')
    return
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Nombre: data.name,
                Email: data.email,
                Teléfono: data.phone,
                Servicio: data.service,
                Mensaje: data.message,
                Fecha: new Date().toISOString(),
              },
            },
          ],
        }),
      }
    )

    if (!response.ok) {
      console.error('Airtable error:', await response.text())
    }
  } catch (error) {
    console.error('Error saving to Airtable:', error)
  }
}

async function sendEmail(data: {
  name: string
  email: string
  phone: string
  service: string
  message: string
}) {
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    console.warn('Email configuration missing, skipping email send')
    return
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    })

    const clientEmail = `
      <html>
        <body style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h2 style="color: #c35d50; font-family: 'Playfair Display', serif;">¡Gracias por contactarme!</h2>
            <p>Hola <strong>${data.name}</strong>,</p>
            <p>He recibido tu mensaje y me pondré en contacto contigo en máximo 24 horas hábiles.</p>
            <hr style="border: none; border-top: 1px solid #e1dcd3; margin: 20px 0;">
            <h3 style="color: #79696d; font-size: 14px;">Resumen de tu solicitud:</h3>
            <p><strong>Nombre:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Teléfono:</strong> ${data.phone}</p>
            <p><strong>Servicio:</strong> ${data.service}</p>
            <p><strong>Mensaje:</strong></p>
            <p style="background: #faf8f5; padding: 10px; border-left: 4px solid #ef9d90;">${data.message.replace(/\n/g, '<br>')}</p>
            <hr style="border: none; border-top: 1px solid #e1dcd3; margin: 20px 0;">
            <p style="color: #8e8280; font-size: 12px;">Mientras tanto, puedes contactarme directamente por <a href="https://wa.me/5491151650852" style="color: #c35d50; text-decoration: none;">WhatsApp</a>.</p>
            <p style="color: #8e8280; font-size: 12px;">Un abrazo,<br><strong>Anahí</strong></p>
          </div>
        </body>
      </html>
    `

    const designerEmail = `
      <html>
        <body style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto;">
            <h2 style="color: #c35d50; font-family: 'Playfair Display', serif;">Nuevo contacto recibido</h2>
            <p><strong>De:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Teléfono:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            <p><strong>Servicio solicitado:</strong> ${data.service}</p>
            <hr style="border: none; border-top: 1px solid #e1dcd3; margin: 20px 0;">
            <h3>Mensaje:</h3>
            <p>${data.message.replace(/\n/g, '<br>')}</p>
            <hr style="border: none; border-top: 1px solid #e1dcd3; margin: 20px 0;">
            <p style="color: #8e8280; font-size: 12px;">Fecha: ${new Date().toLocaleString('es-AR')}</p>
          </div>
        </body>
      </html>
    `

    await transporter.sendMail({
      from: EMAIL_USER,
      to: data.email,
      subject: 'Confirmación de tu mensaje - Anahí Design',
      html: clientEmail,
    })

    await transporter.sendMail({
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: `Nuevo contacto: ${data.name}`,
      html: designerEmail,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    throw error
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { name, email, phone, service, message } = data

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    await Promise.all([
      saveToAirtable(data),
      sendEmail(data),
    ])

    return NextResponse.json(
      { success: true, message: 'Mensaje enviado correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Error al procesar tu solicitud' },
      { status: 500 }
    )
  }
}
