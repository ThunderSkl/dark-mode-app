import { useDarkMode } from "../../hooks/useDarkMode";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg flex items-center gap-2"
    >
      {theme === "light" ? (
        <>
          <Sun className="w-5 h-5" />
          
        </>
      ) : theme === "dark" ? (
        <>
          <Moon className="w-5 h-5" />
        </>
      ) : (
        <>
          <Monitor className="w-5 h-5" />
        </>
      )}
    </button>
  );
}
