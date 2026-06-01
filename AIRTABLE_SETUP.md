# 🗄️ Configuración de Airtable - Base de Datos de Contactos

## 1. Crear Cuenta en Airtable

1. Ir a https://airtable.com
2. Sign up → crear cuenta con email
3. Verificar email

## 2. Crear una Base Nueva

1. **Home** → "Add a base"
2. **Start from scratch**
3. Nombre: `Anahí Design - Contactos`
4. Crear base

## 3. Crear Tabla "Contactos"

La tabla se crea por defecto, pero verifica estos campos:

### Campos Requeridos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| **Nombre** | Texto corto | Nombre del cliente |
| **Email** | Email | Email del cliente |
| **Teléfono** | Teléfono | Número de contacto |
| **Servicio** | Selección única | Pack contratado |
| **Mensaje** | Párrafo largo | Detalles del proyecto |
| **Fecha** | Fecha y hora | Cuándo se envió |

### Pasos para crear campos:

1. En la tabla, haz click en el `+` al final
2. Para cada campo:
   - Nombre del campo
   - Selecciona el tipo
   - Click "Create field"

### Configurar "Servicio" (selección única):

1. Field type: **Single select**
2. Opciones:
   - `Pack Básico`
   - `Pack Avanzado`
   - `Pack Full`
   - `Otro`
3. Guardar

## 4. Obtener Credenciales

### Base ID:

1. Abrir tu base en Airtable
2. Copiar la URL:
   ```
   https://airtable.com/app[BASE_ID]/tbl[TABLE_ID]/...
   ```
3. El `BASE_ID` es lo que va después de `app`
   ```
   BASE_ID = xyz1abc2def3
   ```

### Token Personal:

1. Ir a https://airtable.com/developers
2. Click en tu nombre (arriba derecha) → "Developer hub"
3. **Personal access tokens** (izquierda)
4. "Create token"
5. Configurar permisos:
   - ✅ `data.records:read`
   - ✅ `data.records:write`
   - Scope: Tu base específica
6. Copiar token:
   ```
   TOKEN = pat_abc123def456ghi789...
   ```

## 5. Variables de Entorno

En `.env.local`:

```env
AIRTABLE_TOKEN=pat_abc123def456...
AIRTABLE_BASE_ID=app1234567890
AIRTABLE_TABLE_NAME=Contactos
```

## 6. Verificar Configuración

### Test local:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+54 9 11-5165-0852",
    "service": "basico",
    "message": "Este es un mensaje de prueba."
  }'
```

### Verificar en Airtable:

1. Actualizar página (F5)
2. Ir a tabla "Contactos"
3. Deberías ver una fila con los datos del test

## 7. Vistas Personalizadas

### Vista: "Pendientes de Respuesta"

1. En la tabla, haz click en **"+"** (nueva vista)
2. **Grid** (por defecto está bien)
3. Nombre: "Pendientes"
4. En el filtro: "Fecha" → "Last 7 days"
5. Guardar

### Vista: "Por Servicio"

1. **Nuevo filtro** o **Agrupar**
2. Agrupar por: **Servicio**
3. Nombre vista: "Por Paquete"

### Vista: "Respondidos"

1. Agregar campo: **"Respondido"** (Checkbox)
2. Crear vista con filtro: "Respondido = no marcado"

## 8. Automatizaciones (Airtable Pro)

Si tienes **Airtable Pro**, puedes automatizar:

### Automation: Notificación por correo cuando nuevo registro

1. **Automations** (arriba)
2. **Create automation**
3. Trigger: "When record created"
4. Action: "Send email to:"
   - To: `galeano.bardisa@gmail.com`
   - Subject: New contact: {Nombre}
   - Body: 
     ```
     {Nombre} just contacted you
     Service: {Servicio}
     Message: {Mensaje}
     ```
5. Save

## 9. Integración con Slack (Opcional)

### Setup Slack + Airtable:

1. En **Automations**
2. **Create automation**
3. Trigger: "When record created"
4. Action: "Post to Slack"
5. Seleccionar canal: `#contactos` o `#leads`
6. Personalizar mensaje:
   ```
   :bell: Nuevo contacto!
   Nombre: {Nombre}
   Email: {Email}
   Servicio: {Servicio}
   ```

## 10. Exportar Datos

### Descargar Excel:

1. Seleccionar todos los registros
2. Más opciones (3 puntos) → **Download**
3. Formato: CSV o Excel

### Crear reportes:

1. **Formularios** (vista especial)
2. Personalizar si quieres formulario interno

## 11. Seguridad

### Proteger base:

1. **Share** (arriba derecha)
2. Solo agregar como "Commenter" o "Viewer" a otros
3. El token personal no comparte a nadie

### Rotación de tokens:

Cambiar token cada 90 días:
1. Developer hub
2. Revocar token viejo
3. Crear token nuevo
4. Actualizar en Vercel

## 12. Troubleshooting

### Error: "Invalid token"

**Soluciones:**
- Verificar que token no tiene espacios
- Recrear token en Airtable
- Esperar 5 minutos para propagación

### Error: "Base not found"

**Soluciones:**
- Copiar BASE_ID correctamente (después de `/app`)
- Asegurarse que tienes acceso a la base
- Verificar que AIRTABLE_TABLE_NAME existe

### Los registros no aparecen

**Checklist:**
- [ ] Tabla se llama exactamente "Contactos"
- [ ] Campos coinciden (Nombre, Email, etc.)
- [ ] No hay filtros ocultos
- [ ] Actualizar base (F5)

### Lentitud en base grande

Si tienes 1000+ registros:
- Crear vistas/filtros
- Usar búsqueda en lugar de scroll
- Exportar datos históricos

## 13. Alternativas a Airtable

Si necesitas cambiar:

### Google Sheets:
```typescript
// Usar Google Sheets API
// Cambiar route.ts para usar sheets
```

### Supabase (PostgreSQL):
```typescript
// Usar Supabase client
import { createClient } from '@supabase/supabase-js'
```

### MongoDB:
```typescript
// Usar mongoose
import mongoose from 'mongoose'
```

## 14. Vista Final de Tabla

```
╔════════════════╦════════════════╦════════════════╦════════════════╗
║ Nombre         ║ Email          ║ Servicio       ║ Fecha          ║
╠════════════════╬════════════════╬════════════════╬════════════════╣
║ Juan Pérez     ║ juan@email.com ║ Pack Básico    ║ 2024-01-15 ... ║
║ María García   ║ maria@email... ║ Pack Full      ║ 2024-01-14 ... ║
║ Carlos López   ║ carlos@email.. ║ Pack Avanzado  ║ 2024-01-13 ... ║
╚════════════════╩════════════════╩════════════════╩════════════════╝
```

## Resumen Rápido

1. ✅ Crear base "Anahí Design"
2. ✅ Crear tabla "Contactos"
3. ✅ Crear 6 campos
4. ✅ Obtener BASE_ID
5. ✅ Crear token personal
6. ✅ Copiar en `.env.local`
7. ✅ Testear con formulario
8. ✅ Ver datos en Airtable
9. ✅ ¡Listo!

---

## Links Útiles

- [Airtable Docs](https://support.airtable.com)
- [API Reference](https://airtable.com/developers/web/api/introduction)
- [Video Tutorial](https://www.youtube.com/watch?v=xxx)

---

**Preguntas?** Contactar soporte de Airtable o revisar logs:
```bash
npm run dev  # Ver errores en consola
```
