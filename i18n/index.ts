import i18n from 'i18next';

// import LanguageDetector from 'i18next-browser-languagedetector';

// .use(LanguageDetector)

import { pt, en } from './locales';

i18n.init({
  lng: 'pt',
  interpolation: {
    escapeValue: false
  },
  debug: false,
  resources: {
    pt: {
      common: pt
    },
    en: {
      common: en
    }
  },
  fallbackLng: 'pt',
  ns: ['common'],
  defaultNS: 'common',
  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
  lowerCaseLng: true,
  load: 'languageOnly'
});

export default i18n;
