import { DateTime } from 'luxon';

export const formatDate = (date: string): string => {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED);
};
