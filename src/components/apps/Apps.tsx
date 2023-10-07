import { useTranslation } from "react-i18next";
import img from "./../../images/Feature Image.png";
import { motion } from "framer-motion";

const Apps = () => {
  const { t } = useTranslation();

  return (
    <div className="apps mb-14">
      <div className="container">
        <div className="apps-content grid grid-cols-main gap-4">
          <motion.div
            className="apps-box1"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img src={img} alt="" className="w-full" />
          </motion.div>
          <motion.div
            className="apps-box2 flex flex-col justify-center mt-32"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className=" text-sColor mb-4">{t("appss")}</span>
            <h2 className="bg-gradient-to-r from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-extrabold  w-2/3 text-3xl mb-6">
              {t("appsh2")}
            </h2>
            <p className=" text-pColor mb-8">{t("appsp")}</p>
            <span className=" text-s2Color">{t("appss2")}</span>
          </motion.div>
        </div>
        <motion.div
          className="apps-banner flex items-center justify-between flex-wrap mt-28 rounded-xl p-7 bg-gradient-to-r from-linColor1 via-linColor2 to-linColor2"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="banner-text mb-4">
            <span className=" text-sm">{t("appss2")}</span>
            <h3 className=" text-xl text-main font-extrabold">{t("appsh3")}</h3>
          </div>
          <a
            href=""
            className=" py-2  px-7 rounded-3xl bg-main text-white text-center"
          >
            {t("appsa")}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Apps;
