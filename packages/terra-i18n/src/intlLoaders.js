/* eslint-disable import/no-unresolved, compat/compat, no-console */
import intlLoaders from 'intlLoaders';
import hasIntlData from 'intl-locales-supported';

// const supportedIntlConstructors = global.Intl ? [
//   Intl.DateTimeFormat,
//   Intl.NumberFormat,
// ] : [];

const supportedIntlConstructors = [
  Intl.DateTimeFormat,
  Intl.NumberFormat,
];

// const supportedIntlConstructors = () => {
//   /**
//    * Use try-catch to check if Intl is provided by the browser. In some instances checking Intl will throw an
//    * error and crash the page with little information.
//    *
//    * Reference: https://github.com/cerner/terra-core/issues/2820
//    */
//   let constructors;
//   try {
//     console.log('**********TERRA-I18N supportedIntlConstructors: ');

//     console.log('**********TERRA-I18N typeof (Intl): ', typeof (Intl));
//     console.log('**********TERRA-I18N (Intl.DateTimeFormat): ', typeof (Intl.DateTimeFormat));
//     console.log('**********TERRA-I18N typeof (Intl.NumberFormat): ', typeof (Intl.NumberFormat));

//     if (typeof (Intl) === 'object' && typeof (Intl.DateTimeFormat) === 'function' && typeof (Intl.NumberFormat) === 'function') {
//       constructors = [
//         Intl.DateTimeFormat,
//         Intl.NumberFormat,
//       ];
//     }
//   } catch (error) {
//     console.log('**********TERRA-I18N supportedIntlConstructors exception: ');
//     constructors = [];
//   }

//   console.log('**********TERRA-I18N supportedIntlConstructors constructors: ', constructors);
//   return constructors;
// };

const loadFallbackIntl = (localeContext) => {
  try {
    console.log('**********TERRA-I18N loadFallbackIntl: ');
    if (!hasIntlData(['en'], supportedIntlConstructors)) {
      console.log('**********TERRA-I18N intlLoaders.en(): ');
      intlLoaders.en();
    }

    if (process.env.NODE_ENV !== 'production') {
      console.warn(`Locale data was not supplied for the ${localeContext}. Using en data as the fallback locale data.`);
    }
  } catch (e) {
    throw new Error(`Locale data was not supplied for the ${localeContext}, or the en fallback locale.`);
  }
};

const loadIntl = (locale) => {
  const fallbackLocale = locale.split('-').length > 1 ? locale.split('-')[0] : false;

  console.log('**********TERRA-I18N fallbackLocale: ', fallbackLocale);

  try {
    console.log('**********TERRA-I18N Start try supportedIntlConstructors: ', supportedIntlConstructors);
    console.log('**********TERRA-I18N Start try global.Intl: ', global.Intl);
    if (!hasIntlData([locale], supportedIntlConstructors)) {
      console.log('**********TERRA-I18N calling intlLoaders[locale](): ');
      intlLoaders[locale]();
    }
  } catch (e) {
    if (fallbackLocale) {
      try {
        if (!hasIntlData([fallbackLocale], supportedIntlConstructors)) {
          intlLoaders[fallbackLocale]();
        }

        if (process.env.NODE_ENV !== 'production') {
          console.warn(`Locale data was not supplied for the ${locale} locale. Using ${fallbackLocale} data as the fallback locale data.`);
        }
      } catch (error) {
        const localeContext = `${locale} or ${fallbackLocale} locales`;
        console.log('**********TERRA-I18N localeContext1: ', localeContext);

        loadFallbackIntl(localeContext);
      }
    } else {
      const localeContext = `${locale} locale`;
      console.log('**********TERRA-I18N localeContext2: ', localeContext);
      loadFallbackIntl(localeContext);
    }
  }
};

export default loadIntl;

export {
  loadIntl,
};
/* eslint-enable import/no-unresolved, compat/compat, no-console */
