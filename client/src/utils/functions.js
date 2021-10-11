export const getNumberFromRange = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomArrItem = (arr) => {
  if (arr.length > 1) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  return arr[0];
};

export const randomInterval = (cb, time) => {
  const interval = setInterval(() => {
    cb();
  }, time);
  return () => clearInterval(interval);
};

export const isEmpty = (obj) => {
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) return false;
  }
  return true;
};

export const handleMessage = (message) => {
  const randMessage = getRandomArrItem(message);
  let str = randMessage;
  const words = { 1: 'sale', 2: 'new', 3: 'limited edition' };
  for (let key in words) {
    if (str.toLowerCase().includes(words[key])) {
      switch (key) {
        case '1': {
          str = `${str}!`;
          break;
        }
        case '2':
          str = `~~${str}`;
          break;
        case '3':
          let foundWord = str.match(/\b(limited\sedition)\b/gi);
          if (foundWord.length > 1) {
            foundWord.map((word) => {
              str = str.replace(word, word.toUpperCase());
            });
          } else {
            str = str.replace(foundWord[0], foundWord[0].toUpperCase());
          }
          break;
        default:
          return str;
      }
    }
  }
  return str;
};
