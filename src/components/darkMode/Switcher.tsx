import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";

const Switcher = () => {
  const [colorTheme, setTheme]: any = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={30} />
    </>
  );
};

export default Switcher;
