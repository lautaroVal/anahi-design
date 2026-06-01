# Anahí Design - Landing Page

Landing page one-page para **Anahí Design** - Diseño de Interiores

Construida con **Next.js 14**, **Tailwind CSS**, **Nodemailer** y **Airtable**.

## 🎨 Características

- ✨ **One-page responsive** con navegación suave (anclas)
- 📱 **Mobile-first design** elegante y minimalista
- 🎯 **Conversion-focused** con CTAs claros
- 📧 **Integración de contacto** con Airtable + email
- 🔐 **Variables de entorno seguras**
- 🚀 **Optimizado para Vercel**

## 📁 Estructura del Proyecto

```
/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API de contacto
│   │   ├── layout.tsx                # Layout principal
│   │   └── page.tsx                  # Página inicio
│   ├── components/
│   │   ├── Header.tsx                # Navegación
│   │   ├── Hero.tsx                  # Sección inicio
│   │   ├── Projects.tsx              # Portfolio
│   │   ├── About.tsx                 # Acerca de + servicios
│   │   ├── Contact.tsx               # Formulario contacto
│   │   └── Footer.tsx                # Pie de página
│   └── styles/
│       └── globals.css               # Estilos globales
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── .env.local                        # Variables secretas
└── README.md
```

## 🚀 Configuración Inicial

### 1. Clonar y instalar dependencias

```bash
cd anahi-design-landing
npm install
```

### 2. Configurar variables de entorno

Editar `.env.local` con tus credenciales:

#### Gmail SMTP
```env
GMAIL_USER=tu-email@gmail.com
GMAIL_PASSWORD=tu-contraseña-app  # No es tu contraseña de Gmail normal
```

Para obtener la contraseña de aplicación:
1. Ve a [Google Account](https://myaccount.google.com)
2. Seguridad → Contraseñas de aplicaciones
3. Selecciona "Correo" y "Windows"
4. Copia la contraseña de 16 caracteres

#### Airtable
```env
AIRTABLE_TOKEN=pat_...           # Personal Access Token
AIRTABLE_BASE_ID=app...          # ID de tu base
AIRTABLE_TABLE_NAME=Contactos    # Nombre de la tabla
```

Para obtener tokens de Airtable:
1. Ve a [Airtable Developer](https://airtable.com/developers)
2. Crea un nuevo token personal con permisos `data.records:write`
3. Copia el `Base ID` desde la URL de tu base

### 3. Crear tabla en Airtable

Crea una tabla **"Contactos"** con estos campos:
- `Nombre` (Texto)
- `Email` (Email)
- `Teléfono` (Teléfono)
- `Servicio` (Selección única)
- `Mensaje` (Párrafo largo)
- `Fecha` (Fecha y hora)

## 💻 Desarrollo Local

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 🚀 Deploy en Vercel

### Opción 1: Conexión Git automática
1. Push tu código a GitHub
2. Ve a [Vercel](https://vercel.com)
3. Conecta tu repositorio
4. Vercel detectará Next.js automáticamente
5. Agrega las variables de entorno en "Environment Variables"

### Opción 2: Vercel CLI
```bash
npm install -g vercel
vercel
# Sigue las instrucciones
```

## 🔌 Integraciones

### Email (Nodemailer + Gmail)
- Confirmación automática al visitante
- Notificación al diseñador
- Plantillas HTML personalizadas

### Base de datos (Airtable)
- Registro de todos los contactos
- Análisis de leads
- Integración con otras herramientas

## 📧 Flujo de Contacto

1. **Usuario completa formulario** en la sección Contacto
2. **Validación frontend** y envío a `/api/contact`
3. **API procesa** y guarda en Airtable + envía emails
4. **Usuario recibe** confirmación por email
5. **Diseñador recibe** notificación con los datos

## 🎯 Secciones

### Inicio (Hero)
- Propuesta de valor clara
- CTAs principales (Comenzar proyecto, Ver proyectos)
- Imagen/placeholder visual

### Proyectos
- 6 proyectos destacados en grid
- Categorías y descripción
- Información visual con emojis

### Acerca de Mí
- Biografía personal
- Metodología de trabajo
- 3 paquetes de servicio
- Estadísticas

### Contacto
- Formulario completo
- Validación en tiempo real
- Contactos alternativos (WhatsApp, Email)

## 🎨 Paleta de Colores

- **Beige/Neutro**: Fondos y textos principales
- **Cream**: Superficies y tarjetas
- **Rose**: Acentos y CTAs
- **Gray**: Textos secundarios

Todos los colores están en `tailwind.config.js` y se adaptan a light/dark mode.

## 📱 Responsive Design

- ✅ Mobile (320px+)
- ✅ Tablet (768px+)
- ✅ Desktop (1024px+)
- ✅ Large Screens (1440px+)

## 🔒 Seguridad

- ✅ Validación de formularios
- ✅ Variables de entorno privadas
- ✅ Rate limiting recomendado (implementar en Vercel)
- ✅ CORS configurado
- ✅ Sanitización de datos

## 📊 SEO

- ✅ Meta tags configurados
- ✅ Open Graph
- ✅ Sitemap automático
- ✅ Mobile-friendly
- ✅ Velocidad optimizada

## 🤝 Próximas mejoras

- [ ] Galería de proyectos dinámicos
- [ ] Integración de testimonios
- [ ] Newsletter
- [ ] Chatbot AI
- [ ] Blog de diseño
- [ ] Booking de consulta
- [ ] Analytics avanzados

## 📞 Soporte

Para cambios o actualizaciones, edita los componentes en `src/components/` 
y los estilos en `src/styles/globals.css` o directamente en los componentes con Tailwind.

---

**Hecho con ❤️ para crear espacios hermosos**
