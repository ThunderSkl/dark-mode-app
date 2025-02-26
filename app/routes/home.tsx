import { BrowserRouter as Router, Routes, Route, Link } from "react-router";
import { useDarkMode } from "~/hooks/useDarkMode";
import ThemeToggle from "~/components/ThemeToggle/ThemeToggle";

// Componente principal de la aplicación
export default function App() {
  // Uso del hook personalizado para manejar el tema (oscuro o claro)
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col">        
        {/* Encabezado del sitio con título, navegación y botón de cambio de tema */}
        <header className="bg-blue-500 text-white p-4 flex justify-between items-center shadow-md">
          <h1 className="text-2xl font-bold">Mi Sitio de Noticias</h1>
          <nav>
            {/* Enlaces de navegación */}
            <Link to="/" className="mr-4">Inicio</Link>
            <Link to="/about">Acerca de</Link>
          </nav>
          {/* Componente para alternar el tema */}
          <ThemeToggle/>
        </header>

        {/* Contenido principal de la aplicación */}
        <main className="flex-grow p-4">
          <Routes>
            {/* Ruta principal que muestra una lista de noticias */}
            <Route path="/" element={
              <div>
                <h2 className="text-xl font-bold mb-4">Últimas Noticias</h2>
                {/* Ejemplo de artículos de noticias */}
                <article className="mb-4 p-4 border rounded-lg dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Noticia 1</h3>
                  <p>Contenido de la noticia 1...</p>
                </article>
                <article className="mb-4 p-4 border rounded-lg dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Noticia 2</h3>
                  <p>Contenido de la noticia 2...</p>
                </article>
                <article className="mb-4 p-4 border rounded-lg dark:border-gray-700">
                  <h3 className="text-lg font-semibold">Noticia 3</h3>
                  <p>Contenido de la noticia 3...</p>
                </article>
              </div>
            } />
            {/* Ruta para la página "Acerca de" */}
            <Route path="/about" element={
              <div>
                <h2 className="text-xl font-bold">Acerca de</h2>
                <p>Esta es una aplicación de noticias con cambio de tema.</p>
              </div>
            } />
          </Routes>
        </main>

        {/* Pie de página con derechos de autor */}
        <footer className="bg-blue-500 text-white p-4 text-center mt-4">
          <p>&copy; 2025 Mi Sitio de Noticias. Todos los derechos reservados.</p>
        </footer>
      </div>
  );
}
