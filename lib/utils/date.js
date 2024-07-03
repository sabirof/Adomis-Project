import { format } from 'date-fns';
import { enUS, de } from 'date-fns/locale';

export const formatDate = (date, locale = 'en') => {
  const localeMap = {
    en: enUS,
    de,
  };

  return format(new Date(date), 'dd/MM/yyyy', { locale: localeMap[locale] });
};
