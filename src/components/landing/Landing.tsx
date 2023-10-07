import img1 from "./../../images/Header Illustration (1).png";
import img2 from "./../../images/Group 81.png";
import img3 from "./../../images/Comapnies Logo.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Landing = () => {
  const { t } = useTranslation();

  return (
    <div className="landing my-20">
      <div className="container">
        <div className="landing-conten grid grid-cols-main">
          <motion.div
            className="landing-box1 mt-12 "
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="bg-gradient-to-r from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-extrabold text-5xl mt-10 mb-5">
              {t("landh1")}
            </h1>
            <p className="mb-8 text-pColor dark:text-main">{t("landp")}</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                placeholder={t("landplace")}
                className="py-2 pl-4 pr-16 bg-second outline-none max-sm:pr-4 rounded-tl-lg rounded-bl-lg"
              />
              <button className="p-2 bg-btnColor dark:text-white mb-5 rounded-tr-lg rounded-br-lg">
                {t("landb")}
              </button>
            </form>
            <div className="lan-imgs flex items-center">
              <img src={img2} alt="" className=" w-1/4" />
              <p className="mx-2 font-thin text-sm">{t("landp2")}</p>
            </div>
          </motion.div>
          <motion.div
            className="landing-box2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img src={img1} alt="" className="w-full dark:bg-second mt-5" />
          </motion.div>
        </div>
        <div className="landing-signs my-16 flex items-center w-full justify-center">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
