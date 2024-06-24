// utils/date.js
import { format } from 'date-fns';

export const formatDate = (dateString, locale = 'en-US') => {
  try {
    return format(new Date(dateString), 'dd/MM/yyyy');
  } catch (error) {
    console.error('Invalid date format:', dateString, error);
    return 'Invalid Date';
  }
};
