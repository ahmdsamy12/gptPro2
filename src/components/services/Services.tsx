import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="services my-24">
      <div className="container">
        <div className="services-content grid grid-cols-main">
          <motion.div
            className="services-box1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="max-sm:w-full bg-gradient-to-r from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-extrabold text-4xl w-2/3">
              {t("serh2")}
            </h2>
            <p className="bg-gradient-to-r my-5 max-sm:mt-8 from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-bold">
              {t("serp")}
            </p>
          </motion.div>
          <motion.div
            className="services-box2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="box2-content flex items-center gap-3 mb-7 flex-wrap">
              <h3 className="dark:text-main mr-9 max-sm:w-full w-1/4 max-xl:w-full relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("serh3")}
              </h3>
              <p className="w-2/3 text-pColor max-sm:w-full ">{t("serp1")}</p>
            </div>
            <div className="box2-content flex items-center gap-3 mb-7 flex-wrap">
              <h3 className="dark:text-main mr-9 max-sm:w-full w-1/4 max-xl:w-full relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("serh31")}
              </h3>
              <p className="w-2/3 text-pColor max-sm:w-full">{t("serp2")}</p>
            </div>
            <div className="box2-content flex items-center gap-3 mb-7 flex-wrap">
              <h3 className="dark:text-main mr-9 max-sm:w-full w-1/4 max-xl:w-full relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("serh32")}
              </h3>
              <p className="w-2/3 text-pColor max-sm:w-full">{t("serp3")}</p>
            </div>
            <div className="box2-content flex items-center gap-3 mb-7 flex-wrap">
              <h3 className="dark:text-main mb-3 mr-9 max-sm:w-full w-1/4 max-xl:w-full relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("serh33")}
              </h3>
              <p className="w-2/3 text-pColor max-sm:w-full">{t("serp4")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
