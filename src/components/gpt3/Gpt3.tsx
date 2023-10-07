import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Gpt3 = () => {
  const { t } = useTranslation();

  return (
    <div className="gpt3 mb-5">
      <div className="container ">
        <div className="gpt-content bg-second px-10 pt-12 pb-10">
          <motion.div
            className="gpt-box1 flex items-center gap-3 mb-7 flex-wrap"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="dark:text-white max-sm:w-full w-1/6 relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
              {t("gpth3")}
            </h3>
            <p className=" w-2/3 text-pColor max-sm:w-full">{t("gptp")}</p>
          </motion.div>
          <motion.div
            className="gpt-box2 flex justify-between flex-wrap my-16"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=" max-sm:w-full bg-gradient-to-r from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-extrabold text-4xl w-1/2">
              {t("gpth2")}
            </h2>
            <span className="bg-gradient-to-r max-sm:mt-8 from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-bold">
              {t("gpts")}
            </span>
          </motion.div>
          <motion.div
            className="gpt-box3 grid grid-cols-main mt-7"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="box3-card">
              <h3 className="dark:text-white max-sm:w-full w-1/6 relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("gpth31")}
              </h3>
              <p className="text-pColor my-7">{t("gptp1")}</p>
            </div>
            <div className="box3-card">
              <h3 className="dark:text-white max-sm:w-full w-1/6 relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("gpth32")}
              </h3>
              <p className="text-pColor my-7">{t("gptp2")}</p>
            </div>
            <div className="box3-card">
              <h3 className="dark:text-white max-sm:w-full w-1/6 relative before:absolute before:w-1/4 before:h-1 before:bg-gradient-to-r before:from-linColor1 before:to-linColor2 before:mb-2 h-12 pt-5 before:top-0">
                {t("gpth33")}
              </h3>
              <p className="text-pColor my-7">{t("gptp2")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gpt3;
