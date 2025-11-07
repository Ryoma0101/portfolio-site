import { useState, useEffect } from "react";
import { Palette } from "lucide-react";

const themes = [
  { name: "Orange", value: "Orange", color: "bg-orange-500" },
  { name: "Blue", value: "blue", color: "bg-blue-500" },
  { name: "Red", value: "red", color: "bg-red-500" },
  { name: "Green", value: "green", color: "bg-green-600" },
  { name: "Purple", value: "purple", color: "bg-purple-600" },
  { name: "Cyber", value: "cyber", color: "bg-cyan-400" },
  { name: "Pink", value: "pink", color: "bg-pink-500" },
];

export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState("Orange");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("portfolio-theme") || "Orange";
    setCurrentTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
    document.body.setAttribute("data-theme", theme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-skin-hue/20 bg-skin-button-muted/50 px-4 py-2 text-sm font-medium text-skin-base transition-colors hover:bg-skin-button-muted"
        aria-label="Select theme"
      >
        <Palette className="h-4 w-4" />
        <span className="max-sm:hidden">Theme</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-skin-hue/20 bg-skin-fill shadow-lg">
            <div className="p-2">
              <div className="mb-2 px-2 py-1 text-xs font-semibold text-skin-muted">
                Select Theme
              </div>
              {themes.map((theme) => (
                <button
                  key={theme.value}
                  onClick={() => handleThemeChange(theme.value)}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                    currentTheme === theme.value
                      ? "bg-skin-button-accent text-skin-inverted"
                      : "text-skin-base hover:bg-skin-button-muted"
                  }`}
                >
                  <div className={`h-4 w-4 rounded-full ${theme.color}`} />
                  {theme.name}
                  {currentTheme === theme.value && (
                    <span className="ml-auto text-xs">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
