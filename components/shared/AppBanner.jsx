import { motion } from "framer-motion";
import { FiArrowDownCircle } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import Image from "next/image";

function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2">
      <div className="w-full md:w-1/3 text-left">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light">
          Hello, I am Gayane.
        </motion.h1>
        <motion.h1
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
            color: "rgb(34 197 94 / var(--tw-bg-opacity))",
            scale: 1.1,
          }}
          className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light">
          Nice to meet you!
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
          A Frontend Developer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.9,
            delay: 0.3,
          }}
          className="flex justify-center sm:block">
          <a
            download="CV_Gayane_Grigoryan_Frontend_React_React_Native.pdf"
            href="/files/CV_Gayane_Grigoryan_Frontend_React_React_Native.pdf"
            className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
            aria-label="Download Resume">
            <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
            <span className="text-sm sm:text-lg duration-100">Download CV</span>
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-1/4 text-right float-right mt-8 sm:mt-0">
         <Image
          src={
            activeTheme === "dark"
              ? "/images/developer.png"
              : "/images/developer.png"
          }
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
