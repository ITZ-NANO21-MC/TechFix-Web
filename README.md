
# Proyecto de E-commerce "TechFix-Web"

Este es el repositorio para "Nextn", una moderna aplicación de e-commerce construida con Next.js y un conjunto de tecnologías de vanguardia. La aplicación está diseñada para ser rápida, responsiva y fácil de usar, ofreciendo una experiencia de compra fluida.

## Tecnologías Principales

*   **Framework:** [Next.js](https://nextjs.org/) (con App Router)
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
*   **Componentes UI:** [Shadcn/UI](https://ui.shadcn.com/) y [Radix UI](https://www.radix-ui.com/)
*   **Mapas Interactivos:** [Leaflet](https://leafletjs.com/) y [React Leaflet](https://react-leaflet.js.org/)
*   **Manejo de Formularios:** [React Hook Form](https://react-hook-form.com/)
*   **Notificaciones:** [Sonner](https://sonner.emilkowal.ski/)
*   **Integración de IA:** [Google Genkit](https://firebase.google.com/docs/genkit)

---

## Inicio Rápido

Sigue estos pasos para levantar el entorno de desarrollo local.

### 1. Prerrequisitos

- Node.js (versión 20.x o superior recomendada)
- npm o un gestor de paquetes compatible

### 2. Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/ITZ-NANO21-MC/TechFix-Web.git
cd TechFix-Web
npm install
```

### 3. Ejecutar el Servidor de Desarrollo

Para iniciar la aplicación en modo de desarrollo con Turbopack, ejecuta:

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:9002](http://localhost:9002).

---

## Scripts Disponibles

*   `npm run dev`: Inicia el servidor de desarrollo de Next.js con Turbopack en el puerto 9002.
*   `npm run build`: Compila la aplicación para producción.
*   `npm run start`: Inicia un servidor de producción de Next.js.
*   `npm run lint`: Ejecuta el linter de Next.js para identificar problemas en el código.
*   `npm run typecheck`: Ejecuta el compilador de TypeScript para verificar los tipos sin generar archivos.
*   `npm run genkit:dev`: Inicia el servidor de desarrollo de Genkit para las funciones de IA.
*   `npm run genkit:watch`: Inicia el servidor de Genkit en modo de observación para recarga automática.

---

## Estructura del Proyecto

```
nextn/
├── public/           # Archivos estáticos (imágenes, fuentes)
├── src/
│   ├── ai/             # Lógica relacionada con Genkit y IA
│   ├── app/            # Rutas, páginas y layouts (App Router)
│   ├── components/     # Componentes de React reutilizables
│   │   ├── ui/         # Componentes base de Shadcn/UI
│   │   └── ...
│   ├── lib/            # Funciones de utilidad, datos y tipos
│   └── ...
├── .env.local        # Archivo para variables de entorno locales (no versionado)
├── next.config.mjs     # Configuración de Next.js
├── tailwind.config.ts  # Configuración de Tailwind CSS
└── tsconfig.json       # Configuración de TypeScript
```

