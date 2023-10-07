import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Switcher from "../darkMode/Switcher";
import DropLngs from "../drobdown/DropLngs";
import { useTranslation } from "react-i18next";

const NavbarApp = () => {
  // const selectTranslations = useAppSelector((state) => state.i18n.translations[state.i18n.lang]);
  // console.log(t);
  const { t } = useTranslation();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          {/* {selectTranslations.ar.home} */}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          {t("home")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          {t("open")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          {t("caseS")}
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center">
          {t("lib")}
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className=" shadow-lg fixed top-0 z-50 border-none mx-auto rounded-none py-2 px-4 lg:px-8 lg:py-4 bg-main dark:bg-white dark:text-main">
      <div className="container mx-auto flex items-center  text-blue-gray-900 p-0">
        <Typography
          as="a"
          href="#"
          className="mx-4 cursor-pointer py-1.5 font-extrabold"
        >
          {t("gpt")}
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block my-0 ml-auto mr-0 dark:text-main"
        >
          <span>{t("signI")}</span>
        </Button>
        <Button
          variant="gradient"
          size="sm"
          className="hidden lg:inline-block my-0 ml-4 mr-4 bg-btnColor py-2 px-8 rounded-xl"
        >
          <span>{t("signU")}</span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{
                position: "absolute",
                left: "-11px",
                top: "-12px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              style={{
                position: "absolute",
                left: "-11px",
                top: "-12px",
                marginRight: "9px",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
        <div className="font-dark ml-2 flex">
          <Switcher />
          {/* <select id="" className=" ml-2 bg-main dark:bg-white">
            <option value="">english</option>
            <option value="">arabic</option>
          </select> */}
          <DropLngs />
        </div>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 dark:text-main"
          >
            <span>{t("signI")}</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            fullWidth
            className="mb-2 bg-btnColor py-2 px-8 rounded-xl"
          >
            <span>{t("signU")}</span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default NavbarApp;
