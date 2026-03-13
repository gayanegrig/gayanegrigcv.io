import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';
import { I18nextProvider } from 'react-i18next';
import i18n from "../../public/i18next/i18n";

const DefaultLayout = ({ children }) =>
{
	return (
		<I18nextProvider i18n={i18n}>

			<AppHeader />
			<div>{children}</div>
			<AppFooter />
		</I18nextProvider>
	);
};

export default DefaultLayout;
