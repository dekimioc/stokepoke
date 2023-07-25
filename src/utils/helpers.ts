export const getFirstWord = (str: string) => {
  return str.split(' ')[0];
};

export const convertToTwoDecimals = (num: number) => {
  return num.toFixed(2);
};

export const lowercaseString = (str: string) => {
  return str.toLowerCase();
};

export const getNumberOfIngredients = (str: string) => {
  let matches = str.match(/\d+/g);
  if (matches) {
    return {
      text: `(${matches.find((match) => Number(match) <= 10)} ingredients)`,
      number: Number(matches.find((match) => Number(match) <= 10)),
    };
  } else {
    return {
      text: '',
      number: 0,
    };
  }
};
