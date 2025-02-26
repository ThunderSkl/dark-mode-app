## Getting Started

### Installation

Install the dependencies:

```bash
npm install
```

### Development

Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
npm run build
```

# Dark Mode App

Este es un proyecto de una aplicación web de noticias desarrollada con React y React Router. La aplicación permite la navegación entre la página de inicio y la página "Acerca de", además de contar con un sistema de cambio de tema (modo claro/oscuro).

## Características

- **React Router:** Manejo de rutas para navegación entre páginas.
- **Modo oscuro/claro:** Implementado con un hook personalizado `useDarkMode`.
- **Interfaz responsiva:** Diseño adaptable con Tailwind CSS.

## Instalación y ejecución

Para ejecutar este proyecto localmente, sigue los siguientes pasos:

1. Clona el repositorio:
   ```sh
   git clone https://github.com/tu-usuario/dark-mode-app.git
   ```
2. Accede al directorio del proyecto:
   ```sh
   cd dark-mode-app
   ```
3. Instala las dependencias necesarias:

   ```sh
   npm install
   ```

   Asegúrate de que tienes instaladas las siguientes dependencias en tu `package.json`:

   ```json
   "dependencies": {
     "react": "^18.0.0",
     "react-dom": "^18.0.0",
     "react-router": "^6.0.0",
     "react-router-dom": "^6.0.0"
   }
   ```

   Si no tienes `react-router-dom`, instálalo con:

   ```sh
   npm install react-router-dom
   ```

4. Inicia el servidor de desarrollo:
   ```sh
   npm run dev
   ```

## Configuración de React Router

Para hacer funcionar la navegación con React Router, asegúrate de que tu aplicación está envuelta en el `BrowserRouter` en el punto de entrada (`main.js` o `index.js`):

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## Estructura del Proyecto

```
dark-mode-app/
│── src/
│   ├── components/
│   │   ├── ThemeToggle/
│   ├── hooks/
│   │   ├── useDarkMode.js
│   ├── pages/
│   ├── App.js
│   ├── main.js
│── public/
│── package.json
│── README.md
```

## Link to figma design

```
https://www.figma.com/design/tN3P1P1tDN2JirUuOQVbOJ/Dark-mode-app-design?node-id=1-3&t=9MdpFpiE09tA0dvX-1
```
