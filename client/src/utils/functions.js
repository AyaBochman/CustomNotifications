export const getNumberFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomArrItem = (arr) => {
  if (arr.length > 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return arr[0];
};
