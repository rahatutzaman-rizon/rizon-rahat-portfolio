"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface ColorPreset {
  id: string;
  name: string;
  hex: string;
  hsl: string; // "h s% l%"
  rgb: string; // "r, g, b"
  gradientFrom: string; // e.g. "#06b6d4"
  gradientVia: string; // e.g. "#3b82f6"
  gradientTo: string; // e.g. "#6366f1"
  tailwindGradient: string; // Tailwind class string
  threeHex: number;
}

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: "cyan",
    name: "Electric Cyan",
    hex: "#06b6d4",
    hsl: "199 89% 48%",
    rgb: "6, 182, 212",
    gradientFrom: "#06b6d4",
    gradientVia: "#3b82f6",
    gradientTo: "#8b5cf6",
    tailwindGradient: "from-cyan-500 via-blue-500 to-purple-500",
    threeHex: 0x06b6d4,
  },
  {
    id: "purple",
    name: "Cyber Purple",
    hex: "#a855f7",
    hsl: "270 91% 65%",
    rgb: "168, 85, 247",
    gradientFrom: "#a855f7",
    gradientVia: "#ec4899",
    gradientTo: "#6366f1",
    tailwindGradient: "from-purple-500 via-pink-500 to-indigo-500",
    threeHex: 0xa855f7,
  },
  {
    id: "emerald",
    name: "Matrix Neon",
    hex: "#10b981",
    hsl: "160 84% 39%",
    rgb: "16, 185, 129",
    gradientFrom: "#10b981",
    gradientVia: "#14b8a6",
    gradientTo: "#06b6d4",
    tailwindGradient: "from-emerald-400 via-teal-500 to-cyan-500",
    threeHex: 0x10b981,
  },
  {
    id: "rose",
    name: "Sunset Rose",
    hex: "#f43f5e",
    hsl: "347 89% 60%",
    rgb: "244, 63, 94",
    gradientFrom: "#f43f5e",
    gradientVia: "#fb7185",
    gradientTo: "#a855f7",
    tailwindGradient: "from-rose-500 via-pink-500 to-purple-500",
    threeHex: 0xf43f5e,
  },
  {
    id: "amber",
    name: "Solar Gold",
    hex: "#f59e0b",
    hsl: "38 92% 50%",
    rgb: "245, 158, 11",
    gradientFrom: "#f59e0b",
    gradientVia: "#f97316",
    gradientTo: "#ef4444",
    tailwindGradient: "from-amber-400 via-orange-500 to-rose-500",
    threeHex: 0xf59e0b,
  },
  {
    id: "indigo",
    name: "Sapphire Indigo",
    hex: "#6366f1",
    hsl: "239 84% 67%",
    rgb: "99, 102, 241",
    gradientFrom: "#6366f1",
    gradientVia: "#3b82f6",
    gradientTo: "#a855f7",
    tailwindGradient: "from-indigo-500 via-blue-600 to-purple-600",
    threeHex: 0x6366f1,
  },
];

interface ColorThemeContextType {
  activePreset: ColorPreset;
  setColorPreset: (presetId: string) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType>({
  activePreset: COLOR_PRESETS[0],
  setColorPreset: () => {},
});

export const ColorThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activePreset, setActivePreset] = useState<ColorPreset>(COLOR_PRESETS[0]);

  useEffect(() => {
    const savedId = localStorage.getItem("rizon-portfolio-primary-color");
    if (savedId) {
      const found = COLOR_PRESETS.find((p) => p.id === savedId);
      if (found) {
        setActivePreset(found);
      }
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--primary-hsl", activePreset.hsl);
    root.style.setProperty("--primary-hex", activePreset.hex);
    root.style.setProperty("--primary-rgb", activePreset.rgb);
    root.style.setProperty("--primary", activePreset.hsl);
    root.style.setProperty("--gradient-from", activePreset.gradientFrom);
    root.style.setProperty("--gradient-to", activePreset.gradientTo);
    localStorage.setItem("rizon-portfolio-primary-color", activePreset.id);
  }, [activePreset]);

  const setColorPreset = (presetId: string) => {
    const preset = COLOR_PRESETS.find((p) => p.id === presetId);
    if (preset) {
      setActivePreset(preset);
    }
  };

  return (
    <ColorThemeContext.Provider value={{ activePreset, setColorPreset }}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export const useColorTheme = () => useContext(ColorThemeContext);
