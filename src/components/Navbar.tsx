import React from "react";
import ThemeToggleButton from "./ui/ChangeThemeButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 w-full z-10 p-4 flex justify-end bg-transparent">
      <ThemeToggleButton />
    </nav>
  );
};

export default Navbar;
