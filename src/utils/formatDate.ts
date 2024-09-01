
export const formatDate = (
    date: Date | string | number,
    locale: string = 'en-US',
    options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
  ): string => {
    try {
      // Convert the input to a Date object
      const dateObj = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  
      // Check if the date is valid
      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid date');
      }
  
      // Format the date using Intl.DateTimeFormat
      return new Intl.DateTimeFormat(locale, options).format(dateObj);
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };
  