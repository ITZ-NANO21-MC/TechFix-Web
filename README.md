# TechFix Solutions - Landing Page

Este es el repositorio del sitio web para "TechFix Solutions", una landing page moderna y profesional construida con Next.js y un conjunto de tecnologías de vanguardia. El sitio está diseñado para ser rápido, completamente responsivo y fácil de usar, presentando los servicios de reparación de la empresa de manera clara y atractiva.

## Tecnologías Principales

*   **Framework:** [Next.js](https://nextjs.org/) (con App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/)
*   **Iconos:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
*   **Manejo de Formularios:** [React Hook Form](https://react-hook-form.com/)
*   **Notificaciones (Toasts):** [Sonner](https://sonner.emilkowal.ski/)
*   **Cambio de Tema (Claro/Oscuro):** [next-themes](https://github.com/pacocoursey/next-themes)

---

## Características Principales

*   **Diseño Moderno y Responsivo:** Una interfaz limpia que se adapta perfectamente a cualquier tamaño de pantalla.
*   **Tema Claro y Oscuro:** Un interruptor permite a los usuarios elegir su preferencia de visualización, guardándola para futuras visitas.
*   **Secciones Claras:**
    *   **Héroe:** Mensaje principal atractivo y directo.
    *   **Servicios:** Listado detallado de los servicios ofrecidos.
    *   **Galería:** Muestra visual de trabajos realizados o productos.
    *   **Testimonios:** Opiniones de clientes para generar confianza.
    *   **Contacto:** Un formulario funcional para que los clientes soliciten cotizaciones.
*   **Optimización de Rendimiento:** Construido con Next.js para tiempos de carga rápidos y una excelente experiencia de usuario (UX).
*   **Integración con Google AdSense:** Configurado para mostrar anuncios de Google de manera automática y eficiente.

---

## Inicio Rápido

Sigue estos pasos para levantar el entorno de desarrollo local.

### 1. Prerrequisitos

- Node.js (versión 20.x o superior recomendada)
- npm o un gestor de paquetes compatible (pnpm, yarn)

### 2. Instalación

Clona el repositorio e instala las dependencias del proyecto:

```bash
git clone https://github.com/ITZ-NANO21-MC/TechFix-Web.git
cd TechFix-Web
npm install
```

### 3. Ejecutar el Servidor de Desarrollo

Para iniciar la aplicación en modo de desarrollo, ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000) por defecto, o en el puerto que se indique en la terminal.

---

## Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo de Next.js.
*   `npm run build`: Compila la aplicación para un entorno de producción.
*   `npm run start`: Inicia un servidor de producción de Next.js después de compilar.
*   `npm run lint`: Ejecuta el linter (ESLint) para identificar y corregir problemas en el código.

---

## Estructura del Proyecto

```
TechFix-Web/
├── public/           # Archivos estáticos (imágenes, favicons, etc.)
├── src/
│   ├── app/            # Rutas, páginas y layouts (App Router de Next.js)
│   ├── components/     # Componentes de React reutilizables
│   │   ├── ui/         # Componentes base de Shadcn/UI (Button, Card, etc.)
│   │   └── ...         # Componentes personalizados (Header, Footer, etc.)
│   └── lib/            # Funciones de utilidad (utils), datos (data), etc.
├── .gitignore        # Archivos y carpetas ignorados por Git
├── next.config.mjs     # Archivo de configuración de Next.js
├── package.json      # Dependencias y scripts del proyecto
├── README.md         # Este archivo
├── tailwind.config.ts  # Archivo de configuración de Tailwind CSS
└── tsconfig.json       # Archivo de configuración de TypeScript
```
