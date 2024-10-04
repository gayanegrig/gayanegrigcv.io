
// import { useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { FiGlobe } from 'react-icons/fi';

// function LanguageSwitcher()
// {
//     const [showLanguageModal, setShowLanguageModal] = useState(false);
//     const { i18n } = useTranslation();

//     function toggleLanguageModal()
//     {
//         setShowLanguageModal(!showLanguageModal);
//     }
//     function changeLanguage(lang)
//     {
//         i18n.changeLanguage(lang);
//         setShowLanguageModal(false);
//     }

//     return (
//         <div className="relative">
//             <div
//                 onClick={toggleLanguageModal}
//                 aria-label="Language Switcher"
//                 className="ml-4 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
//             >
//                 <FiGlobe className="text-xl text-white" />
//             </div>

//             {showLanguageModal && (
//                 <div className="absolute top-full right-0 mt-2 w-40 bg-white p-4 shadow-lg rounded-lg z-50">
//                     <button
//                         className="text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light block mb-2"
//                         onClick={() => changeLanguage('en')}
//                     >
//                         English
//                     </button>
//                     <button
//                         className="text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light block mb-2"
//                         onClick={() => changeLanguage('hy')}
//                     >
//                         Armenian
//                     </button>
//                     <button
//                         className="text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light block"
//                         onClick={() => changeLanguage('ru')}
//                     >
//                         Russian
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default LanguageSwitcher;
import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

function LanguageSwitcher()
{
    const [showLanguageModal, setShowLanguageModal] = useState(false);
    const { i18n } = useTranslation();

    const modalRef = useRef(null); // Reference to the modal
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [offset, setOffset] = useState({ x: 0, y: 0 });

    const toggleLanguageModal = () =>
    {
        setShowLanguageModal(!showLanguageModal);
    };

    const changeLanguage = (lang) =>
    {
        i18n.changeLanguage(lang);
        setShowLanguageModal(false);
    };

    const startDrag = (e) =>
    {
        // Prevents dragging from starting if it's already being dragged
        if (modalRef.current)
        {
            setIsDragging(true);
            const rect = modalRef.current.getBoundingClientRect();
            // Calculate the offset between the mouse and the top-left corner of the modal
            setOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            });
        }
    };

    const drag = (e) =>
    {
        if (isDragging && modalRef.current)
        {
            const newX = e.clientX - offset.x;
            const newY = e.clientY - offset.y;

            // Update the position of the modal based on the mouse movement
            setPosition({ x: newX, y: newY });
        }
    };

    const stopDrag = () =>
    {
        setIsDragging(false);
    };

    return (
        <div className="relative">
            <div
                onClick={toggleLanguageModal}
                aria-label="Language Switcher"
                className="ml-4 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
            >
                <FiGlobe className="text-xl text-white" />
            </div>

            {showLanguageModal && (
                <div
                    ref={modalRef}
                    className="absolute bg-white p-4 shadow-lg rounded-lg z-50"
                    style={{ left: position.x, top: position.y }} // Position the modal using state
                    onMouseDown={startDrag} // Start dragging
                    onMouseMove={drag} // While dragging
                    onMouseUp={stopDrag} // Stop dragging
                    onMouseLeave={stopDrag} // Ensure dragging stops if mouse leaves the modal
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
            )}
        </div>
    );
}

export default LanguageSwitcher;
