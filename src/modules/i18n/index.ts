import i18n from '../../i18n';
import commonEN from '../../locales/en.json';
import commonES from '../../locales/es.json';

// Import all translation files
import authEN from '../auth/locales/en.json';
import authES from '../auth/locales/es.json';
import pricingEN from '../pricing/locales/en.json';
import pricingES from '../pricing/locales/es.json';

// Merge all translations
const resources = {
  en: {
    translation: {
      ...commonEN,
      ...authEN,
      ...pricingEN,
    },
  },
  es: {
    translation: {
      ...commonES,
      ...authES,
      ...pricingES,
    },
  },
};

// Add the resources to i18n
i18n.addResourceBundle('en', 'translation', resources.en.translation, true, true);
i18n.addResourceBundle('es', 'translation', resources.es.translation, true, true);

export default i18n;
