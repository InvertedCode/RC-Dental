import en from './en.json';
import es from './es.json';

const translations = {
  en,
  es
};

export async function getI18N({ currentLocale }) {
  return translations[currentLocale] || translations['es'];
}

export function getLangFromUrl(url) {
  const lang = url.pathname.split('/')
  console.log(url.pathname.split('/'))
  // return lang.length > 2 ? '/en' : '';
  return lang.filter(Boolean).includes('en') ? '/en' : '';
}