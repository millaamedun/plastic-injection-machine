import '@/styles/globals.css'
import LanguageProvider from '../context/LanguageProvider';

import '../locales/en.json';
import '../locales/pr.json';

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider defaultLanguage="en">
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
