import img from "./../../images/Rectangle 22.png";
import img1 from "./../../images/Rectangle 22 (1).png";
import img2 from "./../../images/Rectangle 22 (2).png";
import img3 from "./../../images/Rectangle 22 (3).png";
import img4 from "./../../images/Rectangle 22 (4).png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="blog mb-16">
      <div className="container">
        <h2 className="w-1/2 mb-14 max-sm:w-full bg-gradient-to-r from-linColor1 via-linColor2 to-linColor2 text-trans bg-clip-text font-extrabold text-4xl">
          {t("blogh2")}
        </h2>
        <div className="blog-content grid grid-cols-main gap-10">
          <motion.div
            className="blog-box1 bg-second relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={img}
              alt=""
              className=" bg-main dark:bg-white border-none"
            />
            <span className="p-5 block text-xs text-white">{t("blogs")}</span>
            <p className="px-5 font-black text-white">{t("blogp")}</p>
            <a
              href=""
              className="absolute bottom-5 px-5 text-xs text-white max-sm:relative max-sm:pt-8 block"
            >
              {t("blogs2")}
            </a>
          </motion.div>
          <motion.div
            className="blog-box2"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="box2-1 bg-second mb-10 relative">
              <img src={img1} alt="" className="bg-main dark:bg-white" />
              <span className="px-5 py-5 block text-xs text-white">
                {t("blogs")}
              </span>
              <p className="px-5 font-black text-white">{t("blogp")}</p>
              <a href="" className="p-5 block text-xs text-white">
                {t("blogs2")}
              </a>
            </div>
            <div className="box2-2 bg-second">
              <img src={img2} alt="" className="bg-main dark:bg-white" />
              <span className="px-5 py-5 block text-xs text-white">
                {t("blogs")}
              </span>
              <p className="px-5 font-black text-white">{t("blogp")}</p>
              <a href="" className="p-5 block text-xs text-white">
                {t("blogs2")}
              </a>
            </div>
          </motion.div>
          <motion.div
            className="blog-box3"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="box3-1 mb-10 bg-second">
              <img src={img3} alt="" className="bg-main dark:bg-white" />
              <span className="px-5 py-5 block text-xs text-white">
                {t("blogs")}
              </span>
              <p className="px-5 font-black text-white">{t("blogp")}</p>
              <a href="" className="p-5 block text-xs text-white">
                {t("blogs2")}
              </a>
            </div>
            <div className="box3-2 bg-second">
              <img src={img4} alt="" className="bg-main dark:bg-white" />
              <span className="px-5 py-5 block text-xs text-white">
                {t("blogs")}
              </span>
              <p className="px-5 font-black text-white">{t("blogp")}</p>
              <a href="" className="p-5 block text-xs text-white">
                {t("blogs2")}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
