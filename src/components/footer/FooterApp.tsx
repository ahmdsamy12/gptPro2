import React from "react";
import { useTranslation } from "react-i18next";

const FooterApp = () => {
  const { t } = useTranslation();

  return (
    <div className="footer pt-16 bg-second pb-12">
      <div className="container">
        <div className="footer-content">
          <div className="footer-box1">
            <h2 className=" max-sm:w-full bg-gradient-to-r text-center w-1/2 my-0 mx-auto from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-extrabold text-4xl">
              {t("footh2")}
            </h2>
            <a
              href=""
              className=" block text-center my-20 py-2 px-7 text-white border w-fit mx-auto text-xs"
            >
              {t("foota")}
            </a>
          </div>
          <div className="footer-box2">
            <ul className="grid grid-cols-main gap-6">
              <li>
                <h3 className="mb-4 font-black text-white text-4xl">
                  {t("footh3")}
                </h3>
                <p className="font-light text-sm w-2/3 text-white">
                  {t("footp")}
                </p>
              </li>
              <li>
                <h3 className=" font-black mb-6 text-white">{t("footh31")}</h3>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota1")}
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota2")}
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota3")}
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota4")}
                </a>
              </li>
              <li>
                <h3 className=" font-black mb-6 text-white">{t("footh32")}</h3>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota5")}
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota6")}
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  {t("foota7")}
                </a>
              </li>
              <li>
                <h3 className=" font-black mb-6 text-white">{t("footh33")}</h3>
                <a href="" className="block font-extralight mb-5 text-white">
                  Crechterwoord K12 182 DK Alknjkcb
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  085-132567
                </a>
                <a href="" className="block font-extralight mb-5 text-white">
                  info@payme.net
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-end text-center my-7 text-white">
          <p>{t("footp1")}</p>
        </div>
      </div>
    </div>
  );
};

export default FooterApp;
