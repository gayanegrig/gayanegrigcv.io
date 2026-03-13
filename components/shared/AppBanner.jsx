import { motion } from "framer-motion";
import { FiDownload, FiAward } from "react-icons/fi";
import Image from "next/image";
import { Developer } from "../../public/images/assets.images";
import { useTranslation } from "react-i18next";

function AppBanner()
{
  const { t } = useTranslation();


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col w-full md:w-full mt-2 sm:justify-between items-center sm:flex-row mt-5 ">
      <div className="w-full md::w-full text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light">
          {t('AppBanner.hello_i_am')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.2,
          }}
          className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200">
          {t("AppBanner.frontend_developer")}
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            rotate: -10,
            scale: 0.8,
            color: "rgb(0 0 0 / var(--tw-bg-opacity))",
          }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
            color: "rgb(99 102 241 / var(--tw-bg-opacity))",
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.2,
          }}
          whileHover={{
            color: "rgb(139 170 228 / var(--tw-bg-opacity))",
            scale: 1.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light">
          {t("AppBanner.nice_to_meet_you")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex flex-col sm:flex-row gap-2 mt-10"
        >
          <a
            download="CV_Gayane_Grigoryan_Frontend_React_React_Native.pdf"
            href="/files/CV_Gayane_Grigoryan_Frontend_React_React_Native.pdf"
            className="flex items-center justify-center gap-2 px-2 py-2 text-sm md:text-base font-medium rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300"
          >
            <FiDownload className="w-4 h-4" />
            {t("AppBanner.download_cv")}
          </a>

          <a
            download="Gayane_React_JS_certificate.pdf"
            href="/files/Gayane_React_JS_certificate.pdf"
            className="flex items-center justify-center gap-2 px-7 py-2 text-sm md:text-base font-medium rounded-lg border border-indigo-500 text-indigo-600 dark:text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all duration-300"
          >
            <FiAward className="w-4 h-4" />
            {t("AppBanner.Download_Certificate")}
          </a>
        </motion.div>

      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-1/4 text-right float-right mt-8 sm:mt-0">
        <Image
          src={Developer.src}
          alt="Developer"
          width={500}
          height={500}
          layout="responsive"
        />
      </motion.div>


    </motion.section>
  );
}

export default AppBanner;
