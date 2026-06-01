# 🚀 Guía de Despliegue - Anahí Design Landing Page

## 1. Preparar el Proyecto

### Verifica que todo esté listo:
```bash
npm run build
npm run lint
```

### Asegúrate que los cambios estén commiteados:
```bash
git add .
git commit -m "Landing page Anahí Design v1.0"
git push origin main
```

## 2. Desplegar en Vercel

### Opción A: Via web (Recomendado)

1. **Ir a [Vercel.com](https://vercel.com)**
2. **Conectar tu repositorio GitHub**
   - Sign in / Crea cuenta
   - "Import Project"
   - Selecciona tu repositorio
3. **Vercel detectará Next.js automáticamente**
4. **Configura variables de entorno:**
   - Project Settings → Environment Variables
   - Agrega todas las variables de `.env.local`:
     ```
     GMAIL_USER: your-email@gmail.com
     GMAIL_PASSWORD: app-password
     AIRTABLE_TOKEN: pat_xxx
     AIRTABLE_BASE_ID: app_xxx
     AIRTABLE_TABLE_NAME: Contactos
     ```
5. **Deploy!** → Vercel automáticamente deployará

### Opción B: CLI

```bash
npm install -g vercel
vercel

# Sigue las instrucciones interactivas
# Se te pedirá que confirmes variables de entorno
```

## 3. Configuraciones Importantes

### Dominio Personalizado

1. **En Vercel Dashboard:**
   - Project Settings → Domains
   - "Add Domain"
   - Sigue las instrucciones DNS

2. **Opción 1: Dominio registrado en Namecheap/GoDaddy**
   - Accede a tu registrador
   - Cambia nameservers a:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ```

3. **Opción 2: Dominio en otro hosting**
   - Agregá un CNAME record:
     ```
     CNAME  www  cname.vercel-dns.com
     ```

### Variables de Entorno Avanzadas

#### Para production:
```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://tu-dominio.com
```

#### Para análisis (opcional):
```env
NEXT_PUBLIC_GA_ID=UA-XXXXX-X  # Google Analytics
```

## 4. Post-Deploy

### Verificar que todo funciona:

- [ ] Acceder a la URL
- [ ] Probar navegación (anclas)
- [ ] Probar formulario de contacto
- [ ] Verificar que lleguen emails
- [ ] Revisar registros en Airtable
- [ ] Verificar meta tags en el navegador

### Testear formulario:
```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+54 9 11-1234-5678",
    "service": "basico",
    "message": "Mensaje de prueba"
  }'
```

## 5. Configuración de Analytics (Opcional)

### Google Analytics:

1. **Crear cuenta en [Google Analytics](https://analytics.google.com)**
2. **Obtener tu Measurement ID**
3. **Agregar variable en Vercel:**
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
4. **Usar en Layout:**
```tsx
// En src/app/layout.tsx
import Script from 'next/script'

export default function RootLayout() {
  return (
    <>
      <Script strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      />
      <Script id="ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  )
}
```

## 6. Monitoreo Continuo

### Verificar logs en Vercel:
```bash
vercel logs [PROJECT_NAME]
```

### Revisar errores:
- Dashboard → Deployments → Error tab
- Vercel Monitoring → Real-time logs

### Alertas (Vercel Pro):
- Configura notificaciones de deployment
- Errores de runtime
- Performance issues

## 7. Optimizaciones para Producción

### Images:
- Convertir emojis a SVG si es necesario
- Optimizar cualquier imagen PNG/JPG
- Usar `next/image` para lazy loading

### Performance:
- Revisar Core Web Vitals en Vercel Analytics
- Usar `next/font` para fuentes optimizadas (ya implementado)
- Activar compression en Vercel

### SEO:
- Instalar [Vercel Web Analytics](https://vercel.com/analytics)
- Crear `sitemap.xml`:
```xml
<!-- public/sitemap.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://tu-dominio.com</loc>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://tu-dominio.com/#proyectos</loc>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://tu-dominio.com/#contacto</loc>
    <priority>0.9</priority>
  </url>
</urlset>
```

## 8. Troubleshooting

### Formulario no envía:
- Verificar variables de entorno en Vercel
- Revisar logs: `vercel logs`
- Probar localmente: `npm run dev`

### Emails no llegan:
- Verificar contraseña de app de Gmail
- Revisar carpeta spam
- Probar envío manual desde Gmail

### Airtable no guarda:
- Verificar token y Base ID
- Asegurar que existe la tabla "Contactos"
- Revisar campos de la tabla

### Dominio no funciona:
- Esperar 24-48 horas para propagación DNS
- Usar `nslookup tu-dominio.com` para verificar
- Revisar nameservers en tu registrador

## 9. Actualizar después de Deploy

```bash
# Hacer cambios localmente
git add .
git commit -m "Descripción del cambio"
git push origin main

# Vercel automáticamente redeploya
# (verificar en https://vercel.com/dashboard)
```

## 10. Seguridad

### Checklist:
- [ ] Variables de entorno NO en Git
- [ ] `.env.local` en `.gitignore`
- [ ] CORS configurado si es necesario
- [ ] Rate limiting en API (opcional en Vercel Pro)
- [ ] Headers de seguridad activados

### Activar HTTPS:
- Automático en Vercel ✅

### Proteger variables sensibles:
```bash
# En .env.local (local)
GMAIL_PASSWORD=tu-contraseña-app

# En Vercel Dashboard (production)
# Solo administradores pueden verlas
```

---

**¡Listo!** Tu landing page está online 🎉

Próximos pasos:
- Compartir en redes sociales
- Pedir a amigos que completen el formulario
- Monitorear conversiones
- Actualizar portfolio con nuevos proyectos
