# 📧 Configuración de Email - Nodemailer + Gmail

## 1. Obtener Credenciales de Gmail

### Paso 1: Activar 2FA (Verificación en dos pasos)

1. Ir a https://myaccount.google.com
2. Seguridad (izquierda)
3. Activación en dos pasos → Seguir pasos

### Paso 2: Crear Contraseña de Aplicación

1. Ir a https://myaccount.google.com/apppasswords
2. En "Seleccionar aplicación" → **Correo**
3. En "Seleccionar dispositivo" → **Windows** (o tu SO)
4. Google generará una contraseña de 16 caracteres
5. **Copiar la contraseña** (sin espacios)

### Resultado:
```
GMAIL_USER=tu-email@gmail.com
GMAIL_PASSWORD=abcd efgh ijkl mnop  → abcdefghijklmnop (sin espacios)
```

## 2. Configuración Local (.env.local)

Crea/Edita el archivo `.env.local`:

```env
GMAIL_USER=tu-email@gmail.com
GMAIL_PASSWORD=abcdefghijklmnop
AIRTABLE_TOKEN=pat_xxxxx
AIRTABLE_BASE_ID=app_xxxxx
AIRTABLE_TABLE_NAME=Contactos
```

## 3. Testear Email Localmente

### Opción 1: Usar curl
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Juan Pérez",
    "email": "juan@example.com",
    "phone": "+54 9 11-1234-5678",
    "service": "basico",
    "message": "Quisiera hacer una cocina integral para mi casa."
  }'
```

### Opción 2: Usar Postman
1. Abrir Postman
2. POST → `http://localhost:3000/api/contact`
3. Body → Raw → JSON
4. Enviar el JSON arriba
5. Verificar respuesta 200

### Opción 3: Usar el formulario en la página
1. `npm run dev`
2. Abrir `http://localhost:3000`
3. Ir a sección "Contacto"
4. Completar y enviar formulario

## 4. Verificar que Funciona

Después de enviar un test:

1. **Revisar bandeja de entrada del GMAIL_USER**
   - Deberías recibir el email de notificación

2. **Revisar bandeja del cliente**
   - El email del formulario deberías recibir confirmación

3. **Revisar logs**
   ```bash
   npm run dev  # Verás logs en consola
   ```

## 5. Configuración en Vercel (Production)

### En Dashboard de Vercel:

1. **Project Settings**
2. **Environment Variables**
3. Agregá las mismas variables que en `.env.local`:
   ```
   GMAIL_USER = tu-email@gmail.com
   GMAIL_PASSWORD = abcdefghijklmnop
   AIRTABLE_TOKEN = pat_xxxxx
   AIRTABLE_BASE_ID = app_xxxxx
   AIRTABLE_TABLE_NAME = Contactos
   ```
4. **Save**
5. **Vercel automáticamente redeploya**

## 6. Troubleshooting

### Error: "Invalid login credentials"

**Solución:**
- Verificar que copiaste bien la contraseña (sin espacios)
- Verificar que 2FA está activado en la cuenta
- Recrear la contraseña de aplicación
- Esperar 10 segundos antes de testear de nuevo

### Error: "Gmail SMTP connection timeout"

**Soluciones:**
- Vercel está bloqueando SMTP → contactar soporte
- Alternativa: usar SendGrid, Resend, o Mailgun (requiere cambios en código)

### Los emails no llegan

**Checklist:**
- [ ] Revisar carpeta SPAM
- [ ] Revisar logs en Vercel
- [ ] Probar con un email diferente
- [ ] Verificar que AIRTABLE_TABLE_NAME existe y está bien escrito

### Quiero cambiar el email del remitente

**Opción 1: Usar el mismo email**
```typescript
// En route.ts
from: EMAIL_USER,  // usa el mismo email de Gmail
```

**Opción 2: Usar email personalizado (requiere SPF/DKIM)**
- Más complejo, requiere configuración DNS
- Recomendado: usar servicio como Resend o SendGrid

## 7. Alternativas a Gmail

Si tienes problemas con Gmail, considera:

### Resend (Recomendado para apps)
```bash
npm install resend
```

```typescript
// Usar Resend en lugar de Nodemailer
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);
```

Ventajas:
- Gratis hasta 100 emails/día
- No necesita 2FA
- Mejor para aplicaciones
- Dashboard de tracking

### SendGrid
```bash
npm install @sendgrid/mail
```

Ventajas:
- 100 emails/día gratis
- Mejor para volumen
- Dashboard avanzado

### Mailgun
- API simple
- 1000 emails/mes gratis
- Excelente documentación

## 8. Personalizar Plantillas de Email

### Editar email de cliente

En `src/app/api/contact/route.ts`:

```typescript
const clientEmail = `
  <html>
    <body style="font-family: 'Inter', sans-serif; ...">
      <h2>Hola ${data.name}!</h2>
      <!-- Editar aquí -->
    </body>
  </html>
`
```

### Agregar logo en email

```html
<img src="https://tu-dominio.com/logo.png" alt="Anahí Design" 
  style="max-width: 200px; margin-bottom: 20px;">
```

### Agregar botón con enlace

```html
<a href="https://tu-dominio.com/#proyectos" 
  style="display: inline-block; padding: 12px 24px; 
  background: #ef9d90; color: white; text-decoration: none; 
  border-radius: 6px; font-weight: bold;">
  Ver proyectos
</a>
```

## 9. Monitorear Emails

### Dashboard de Gmail
- Revisar "Más etiquetas" → "Todos los correos"
- Crear filtro para emails de contacto:
  ```
  from:noreply@tu-dominio.com (si lo configuras)
  ```

### En Airtable
- Ver cada contacto en la tabla "Contactos"
- Crear vista personalizada
- Agregar "Respondido" si es necesario

## 10. Seguridad de Contraseña

**⚠️ IMPORTANTE:**
- **NUNCA** guardes la contraseña en GitHub
- **NUNCA** compartas `.env.local`
- **SIEMPRE** usa variables de entorno en Vercel
- **NUNCA** logs de contraseñas en producción

### Revisar logs (para desarrollo):

```bash
# Esto se recomendará cambiar en ruta final
npm run dev 2>&1 | grep -i "gmail\|email"
```

---

## Resumen Rápido

1. ✅ Activar 2FA en Gmail
2. ✅ Crear contraseña de aplicación
3. ✅ Copiar credenciales en `.env.local`
4. ✅ Testear localmente
5. ✅ Agregar en Vercel
6. ✅ ¡Listo!

**¿Preguntas?** Revisa los logs:
```bash
vercel logs [PROJECT_NAME] --tail
```
