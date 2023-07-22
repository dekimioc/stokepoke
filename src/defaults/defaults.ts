export const baseDefaults = {
  id: '',
  name: '',
  description: '',
  image: {
    id: 0,
  },
  imagePath: '',
};

export const bowlDefaults = {
  id: '',
  name: '',
  description: '',
  image: {
    id: 0,
  },
  imagePath: '',
};

export const ingredientsDefaults = [];
export const extraIngredientsDefaults = [];
export const sizeDefaults = {
  id: '',
  name: '',
  description: '',
  currency: '',
  price: 0,
};
export const sauceDefaults = {
  id: '',
  name: '',
  description: '',
};

export const dishDefaults = {
  base: baseDefaults,
  bowl: bowlDefaults,
  ingredients: ingredientsDefaults,
  extraIngredient: extraIngredientsDefaults,
  size: sizeDefaults,
  sauce: sauceDefaults,
};
