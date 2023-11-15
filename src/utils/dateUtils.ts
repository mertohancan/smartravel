export const getNextDay = (day: number) => {
  const today = new Date();
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() + day);
  return nextWeek;
};
