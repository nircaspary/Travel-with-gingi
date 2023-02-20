export const dateStringToDDMMYYY = (date: string) => {
  const dateParts = date.split('/');
  return dateParts[0] + '/' + dateParts[1] + '/' + dateParts[2];
};
export const stringToDate = (date: string) => {
  const dateParts = date.split('/');

  return new Date(+dateParts[0], +dateParts[1] - 1, +dateParts[2]);
};
export const dateToString = (date: Date) => {
  let day = date.getDate().toString().padStart(2, '0');
  let month = (date.getMonth() + 1).toString().padStart(2, '0');
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
