# ⚡ Quick Start - 10 minutos para tener tu sitio online

## Paso 1: Clonar / Descargar (2 min)

```bash
cd anahi-design-landing
npm install
```

## Paso 2: Configurar variables (3 min)

### 2A. Gmail

1. Ir a https://myaccount.google.com/apppasswords
2. Copiar contraseña de 16 caracteres (sin espacios)

### 2B. Airtable

1. Ir a https://airtable.com
2. Crear base "Anahí Design"
3. Crear tabla "Contactos" con campos:
   - Nombre
   - Email
   - Teléfono
   - Servicio
   - Mensaje
   - Fecha
4. En https://airtable.com/developers obtener:
   - BASE_ID (en URL)
   - Personal Access Token (crear con permisos data.records:write)

### 2C. Actualizar .env.local

```env
GMAIL_USER=tu-email@gmail.com
GMAIL_PASSWORD=contraseña-app
AIRTABLE_TOKEN=pat_xxxxx
AIRTABLE_BASE_ID=appxxxxx
AIRTABLE_TABLE_NAME=Contactos
```

## Paso 3: Testear localmente (2 min)

```bash
npm run dev
```

Abrir http://localhost:3000

Probar:
- ✅ Navegar por secciones (click en anclas)
- ✅ Llenar formulario de contacto
- ✅ Ver respuesta "Enviado"

Verificar:
- ✅ Email de confirmación en tu bandeja
- ✅ Datos en Airtable

## Paso 4: Desplegar en Vercel (3 min)

### Opción A: Via Web (más fácil)

1. Push a GitHub:
```bash
git add .
git commit -m "Landing page"
git push origin main
```

2. Ir a https://vercel.com → "Add New Project"
3. Seleccionar tu repositorio
4. Vercel auto-detecta Next.js
5. Environment Variables:
   - Copiar todas de `.env.local`
6. Deploy!

### Opción B: Via CLI

```bash
npm install -g vercel
vercel
# Sigue los pasos interactivos
```

## ✅ Resultado

Tu landing page está online en:
- URL temporal: `https://[nombre-proyecto].vercel.app`
- Dominio personalizado: `https://tu-dominio.com` (configurar DNS)

## 🎯 Próximas mejoras (opcional)

```bash
# Editar contenido:
src/components/Hero.tsx          # Cambiar textos inicio
src/components/Projects.tsx       # Agregar/editar proyectos
src/components/About.tsx          # Cambiar info personal
src/components/Contact.tsx        # Personalizar contacto
```

## 📱 Editar en móvil

Todo el sitio ya es responsive.

Para personalizar colores:
```bash
tailwind.config.js  # Cambiar paleta de colores
```

## 🔧 Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| Formulario no envía | Revisar variables en `.env.local` |
| No llega confirmación email | Revisar SPAM, revisar logs |
| Datos no aparecen en Airtable | Verificar BASE_ID y nombre tabla |
| Página lenta | Ejecutar `npm run build` local |

## 📞 Contacto Rápido

WhatsApp: +54 9 11-5165-0852
Email: galeano.bardisa@gmail.com

---

## Checklist Final

- [ ] npm install ✓
- [ ] .env.local configurado ✓
- [ ] Probado localmente ✓
- [ ] GitHub push ✓
- [ ] Vercel configurado ✓
- [ ] Variables en Vercel ✓
- [ ] Test en URL final ✓
- [ ] ¡Listo! 🎉

**Tiempo total: ~10 minutos**

Ver guías detalladas:
- EMAIL_SETUP.md → Configuración de email completa
- AIRTABLE_SETUP.md → Airtable avanzado
- DEPLOYMENT.md → Despliegue y optimizaciones
