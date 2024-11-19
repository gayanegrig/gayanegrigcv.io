
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher()
{
    const { i18n } = useTranslation();

    const modalRef = useRef(null);



    const changeLanguage = (lang) =>
    {
        i18n.changeLanguage(lang);

    };


    return (
        <div
            ref={modalRef}
            className="top-[10%] right-[25%] absolute bg-white dark:bg-indigo-600 p-4 shadow-lg rounded-lg z-50 "

        >
            <button
                className="text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light block mb-2"
                onClick={() => changeLanguage('en')}
            >
                English
            </button>
            <button
                className="text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light block mb-2"
                onClick={() => changeLanguage('hy')}
            >
                Armenian
            </button>
            <button
                className="text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light block"
                onClick={() => changeLanguage('ru')}
            >
                Russian
            </button>
        </div>
    );
}

export default LanguageSwitcher;
