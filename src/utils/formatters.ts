export const formatPrepTime = (minutes: number): string => {
  if (minutes < 60) return `${minutes} mins`;
  const hours = Math.floor(minutes / 60);
  const remainingMins = minutes % 60;
  return remainingMins > 0 ? `${hours}h ${remainingMins}m` : `${hours}h`;
};

export const formatIngredientAmount = (amount: number, unit: string): string => {
  if (amount === 0) return unit;
  return `${amount} ${unit}`.trim();
};