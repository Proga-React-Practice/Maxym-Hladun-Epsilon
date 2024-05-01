// ThemeToggle.tsx
import React from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ThemeToggle: React.FC<{ toggleTheme: () => void }> = ({
  toggleTheme,
}) => {
  return (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme">
      {theme === "light" ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
