import { Fragment, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "en",
    name: "English",
    country_code: "en",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "ar",
    dir: "rtl",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const DropLngs = () => {
  const currentLangCode = localStorage.getItem("i18nextLng") || "en";
  const currentLang: any = languages.find((l) => l.code === currentLangCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLang.dir || "ltr";
  }, [currentLang]);

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white dark:text-main mx-2">
          {t("Slang")}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className=" w-full absolute right-0 z-10 mt-2  origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1  dark:bg-white">
            {languages.map(({ code, name, country_code }) => (
              <Menu.Item key={country_code}>
                {({ active }) => (
                  <button
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm"
                    )}
                    onClick={() => i18next.changeLanguage(code)}
                  >
                    {name}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropLngs;
