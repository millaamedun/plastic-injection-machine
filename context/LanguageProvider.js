import LanguageContext from './LanguageContext';
import { useState } from 'react';

const LanguageProvider = ({ defaultLanguage, children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;