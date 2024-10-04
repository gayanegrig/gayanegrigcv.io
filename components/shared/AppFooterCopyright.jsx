import { useTranslation } from "react-i18next";

function AppFooterCopyright()
{
	const { t } = useTranslation();

	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
				&copy; {new Date().getFullYear()}
				<a
					href="https://github.com/gayanegrig"
					target="__blank"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					{t('AppFooterCopyright.message')}
				</a>
				.{' '}
				<a
					href="https://www.linkedin.com/in/gayane-vardanyan/"
					target="__blank"
					className="text-secondary-dark dark:text-secondary-light font-medium  hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
				>
					Gayane
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
