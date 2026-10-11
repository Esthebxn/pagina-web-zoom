# Zoom TV Canal 10 - React App

Este es un proyecto React para la página web de Zoom TV Canal 10.

## 🚀 Características

- **Página de TV moderna** con diseño responsivo
- **Integración con API** para contenido dinámico
- **Sistema de noticias** por categorías (Actualidad, Deportes, Música, Nacionales, Regionales)
- **Programación de TV** con horarios por día
- **Sección de anunciantes** con información comercial
- **Live Stream** integrado
- **Panel de administración** (CMS) para gestión de contenido

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── App.jsx         # Componente principal de la aplicación
│   ├── Header/         # Componente de encabezado
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── Navbar.jsx      # Componente de navegación
│   ├── Navbar.css
│   ├── Chatbot/        # Chatbot integrado
│   │   ├── Chatbot.jsx
│   │   └── Chatbot.css
│   ├── Loading/        # Componente de carga
│   │   ├── Loading.jsx
│   │   └── Loading.css
│   └── TVFloatingScreens/ # Pantallas flotantes
│       ├── TVFloatingScreens.jsx
│       └── TVFloatingScreens.css
├── pages/              # Páginas de la aplicación
│   ├── Inicio/         # Página de inicio
│   ├── Nosotros/       # Página sobre nosotros
│   ├── Actualidad/     # Sección de noticias
│   │   ├── Actualidad.jsx
│   │   ├── Deportes.jsx
│   │   ├── Musica.jsx
│   │   ├── Nacionales.jsx
│   │   └── Regionales.jsx
│   ├── Programacion/   # Programación de TV
│   │   └── Programacion12.jsx
│   ├── Anunciantes/    # Sección de anunciantes
│   │   └── Anunciantes.jsx
│   ├── Live9/          # Live Stream
│   │   └── Live9.jsx
│   ├── RedesSociales/  # Página de redes sociales
│   │   └── RedesSociales.jsx
│   └── ZoomApp/        # Página de la app
│       └── ZoomApp.jsx
├── services/           # Servicios de API
│   └── api.js         # Servicio de API centralizado
├── hooks/             # Hooks personalizados
│   └── useNewsCategory.js
├── assets/            # Recursos estáticos
│   └── images/        # Imágenes del proyecto
├── main.jsx          # Punto de entrada de la aplicación
└── index.css         # Estilos globales
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Framework principal
- **Vite** - Herramienta de construcción
- **CSS3** - Estilos personalizados
- **Axios** - Cliente HTTP para API
- **React Router** - Navegación entre páginas

## 🌐 Rutas de la Aplicación

- `/` - Página de inicio
- `/nosotros` - Página sobre nosotros
- `/actualidad` - Noticias de actualidad
- `/deportes` - Noticias deportivas
- `/musica` - Noticias de música
- `/nacionales` - Noticias nacionales
- `/regionales` - Noticias regionales
- `/programacion` - Programación de TV
- `/anunciantes` - Sección de anunciantes
- `/live9` - Live Stream
- `/redes-sociales` - Página de redes sociales
- `/zoom-app` - Página de la aplicación

## 🚀 Instalación y Uso

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:5173
   ```

## 📡 Integración con API

El proyecto está integrado con una API REST que proporciona:
- **Noticias** por categorías
- **Programación** de TV
- **Anunciantes** y patrocinadores
- **Live Stream** URLs
- **Información** de la empresa

## 🎨 Diseño

- **Responsive Design** - Adaptable a todos los dispositivos
- **Tema oscuro** - Diseño moderno y elegante
- **Animaciones suaves** - Transiciones fluidas
- **UI/UX optimizada** - Experiencia de usuario mejorada

## 📱 Características Móviles

- **Navegación táctil** - Optimizada para dispositivos móviles
- **Menú hamburguesa** - Navegación compacta
- **Imágenes responsivas** - Carga optimizada
- **Touch gestures** - Gestos táctiles nativos

## 🖼️ Captura de Pantalla

![Zoom TV Canal 10 - Captura de la Web](https://github.com/user-attachments/assets/7f1e5c45-2297-44e7-91f7-99bc1d1a6c06)

## 🔧 Configuración

El proyecto utiliza variables de entorno para configuración:
- **API_URL** - URL base de la API
- **LIVE_STREAM_URL** - URL del live stream
- **ANALYTICS_ID** - ID de Google Analytics

## 📄 Licencia

Este proyecto es propiedad de Zoom TV Canal 10.
## Base de datos

La web consulta los datos mediante la API; el navegador no se conecta directamente a MySQL. La base utilizada por el backend es **`zoomtv_db`** (MySQL/MariaDB).

Tablas principales:

- `noticias`: noticias, categorías, imágenes y estado de publicación.
- `programacion`: programas y horarios por día.
- `anunciantes`: datos comerciales e imágenes de anunciantes.
- `nosotros`: información institucional, misión, visión, valores e historia.
- `live_stream`: título y enlace de la transmisión en vivo.
- `assistant_faq` y `assistant_social_links`: preguntas y enlaces del chatbot; el backend las crea al iniciar el asistente si no existen.

### Configuración local

1. Inicia MySQL/MariaDB y crea o importa la base `zoomtv_db` usando el esquema SQL del backend.
2. Configura en `backend/.env` las variables `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` y `DB_NAME=zoomtv_db`.
3. En este frontend, configura `VITE_API_URL=http://localhost:3000/api` en `.env` para desarrollo. En producción, usa la URL pública de la API.

No subas archivos `.env` ni contraseñas al repositorio. La API y las credenciales de MySQL pertenecen al backend.
