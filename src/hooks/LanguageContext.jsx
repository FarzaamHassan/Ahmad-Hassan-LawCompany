// import React, { createContext, useContext, useState } from 'react';
// import { translations } from '../translations';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//     const [lang, setLang] = useState('en');

//     const toggleLang = () => {
//         setLang(prev => prev === 'en' ? 'zh' : 'en');
//     };

//     const t = (key) => {
//         return translations[lang][key] || key;
//     };

//     return (
//         <LanguageContext.Provider value={{ lang, toggleLang, t }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };

// export const useLanguage = () => useContext(LanguageContext);

import React, { createContext, useContext, useState } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState('en');

    // Cycling through languages: EN -> ZH -> AR -> EN
    const toggleLang = () => {
        setLang(prev => {
            if (prev === 'en') return 'zh';
            if (prev === 'zh') return 'ar';
            return 'en';
        });
    };

    // Safe translation lookup with fallback to English
    const t = (key) => {
        if (translations[lang] && translations[lang][key]) {
            return translations[lang][key];
        }
        // Fallback to English if translation key is missing in selected language
        if (translations['en'] && translations['en'][key]) {
            return translations['en'][key];
        }
        // Return key string as last resort to prevent app crash
        return key;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
            <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                {children}
            </div>
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);