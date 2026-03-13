"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiX, FiMenu } from "react-icons/fi";
import HireMeModal from "../HireMeModal";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import SunAnimation from "./SunAnimation";
import CloudAnimation from "./CloudAnimation";
import { useTranslation } from "react-i18next";
import { logoDark } from "../../public/images/assets.images";

function AppHeader()
{
	const { t } = useTranslation();
	const [showMenu, setShowMenu] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu()
	{
		setShowMenu(!showMenu);
	}

	function closeMenu()
	{
		setShowMenu(false);
	}

	function showHireMeModal()
	{
		if (!showModal)
		{
			document.documentElement.classList.add("overflow-y-hidden");
			setShowModal(true);
		} else
		{
			document.documentElement.classList.remove("overflow-y-hidden");
			setShowModal(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/" aria-label="Home">
							<Image
								src={logoDark.src}
								className="w-36 cursor-pointer"
								alt="Dark Logo"
								width={150}
								height={120}
							/>
						</Link>
					</div>

					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === "dark" ? <CloudAnimation /> : <SunAnimation />}
					</div>

					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							{showMenu ? (
								<FiX className="h-7 w-7 text-secondary-dark dark:text-ternary-light" />
							) : (
								<FiMenu className="h-7 w-7 text-secondary-dark dark:text-ternary-light" />
							)}
						</button>
					</div>
				</div>

				<div
					className={
						showMenu
							? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
							: "hidden"
					}
				>
					<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<Link href="/#about" aria-label="About Me" onClick={closeMenu}>
							{t("header.about_me")}
						</Link>
					</div>

					<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
						<Link href="/#projects" aria-label="Projects" onClick={closeMenu}>
							{t("header.projects")}
						</Link>
					</div>

					<div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<Link href="/#contact" aria-label="Contact" onClick={closeMenu}>
							{t("header.contact")}
						</Link>
					</div>

					<div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
						<button
							onClick={showHireMeModal}
							className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
							aria-label="Hire Me Button"
						>
							{t("header.hire_me")}
						</button>
					</div>
				</div>

				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
						<Link href="/#about" aria-label="About Me">
							{t("header.about_me")}
						</Link>
					</div>

					<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
						<Link href="/#projects" aria-label="Projects">
							{t("header.projects")}
						</Link>
					</div>

					<div className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">
						<Link href="/#contact" aria-label="Contact">
							{t("header.contact")}
						</Link>
					</div>
				</div>

				<div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
					<div className="hidden md:flex">
						<button
							onClick={showHireMeModal}
							className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
							aria-label="Hire Me Button"
						>
							{t("header.hire_me")}
						</button>
					</div>

					<div
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
					>
						{activeTheme === "dark" ? <CloudAnimation /> : <SunAnimation />}
					</div>
				</div>
			</div>

			<div>
				{showModal ? (
					<HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
				) : null}
			</div>
		</motion.nav>
	);
}

export default AppHeader;