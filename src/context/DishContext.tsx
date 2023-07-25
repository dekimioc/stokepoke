import React, { useState } from 'react';
import { createContext } from 'react';
import { Dish, ExtraIngredient, Ingredient } from '../types';
import { dishDefaults } from '../defaults';
import isEqual from 'lodash.isequal';
import omit from 'lodash.omit';

type DishContextType = {
  dish: Dish;
  setDish: (arg: Dish) => void;
  favouriteDishes: Dish[];
  setFavouriteDishes: (arg: Dish[]) => void;
  selectedFavouriteDish: Dish;
  setSelectedFavouriteDish: (arg: Dish) => void;
  updateFavouritesDishes: (arg: Dish) => void;
  isFavouriteDish: (arg: Dish) => boolean;
  deleteFavouriteDish: (arg: Dish) => void;
  setChangedFavouriteDish: (arg: any, arg2: any) => void;
  changeIngredientsInFavourites: (arg: Ingredient, arg2: string) => void;
  changeExtraIngredientsInFavourite: (arg: ExtraIngredient, arg2: string) => void;
};

export const DishContext = createContext<DishContextType>({
  dish: dishDefaults,
  setDish: () => {},
  favouriteDishes: [],
  setFavouriteDishes: () => {},
  selectedFavouriteDish: dishDefaults,
  setSelectedFavouriteDish: () => {},
  updateFavouritesDishes: () => {},
  isFavouriteDish: () => true,
  deleteFavouriteDish: () => {},
  setChangedFavouriteDish: () => {},
  changeIngredientsInFavourites: () => {},
  changeExtraIngredientsInFavourite: () => {},
});
export const DishProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [dish, setDish] = useState<Dish>(dishDefaults);
  const [favouriteDishes, setFavouriteDishes] = useState<Dish[]>([]);
  const [selectedFavouriteDish, setSelectedFavouriteDish] = useState<Dish>(dishDefaults);

  const updateFavouritesDishes = (dish: Dish) => {
    const itemToAdd = favouriteDishes.filter((item) => isEqual(item, dish));
    if (!itemToAdd.length) {
      setFavouriteDishes((prev) => [...prev, dish]);
    } else {
      setFavouriteDishes(favouriteDishes.filter((d) => !isEqual(d, dish)));
    }
  };

  const deleteFavouriteDish = (dish: Dish) => {
    favouriteDishes.map((favourite) => {
      if (isEqual(favourite, omit(dish, ['quantity']))) {
        setFavouriteDishes(favouriteDishes.filter((d) => !isEqual(d, omit(dish, ['quantity']))));
      }
    });
  };

  const isFavouriteDish = (dish: Dish) =>
    Boolean(favouriteDishes.filter((favourite) => isEqual(favourite, dish)).length);

  const setChangedFavouriteDish = <T extends Record<string, any>, K extends keyof T>(
    key: K,
    newObject: T[K]
  ): void => {
    const favourites = [...favouriteDishes];
    const favouriteToEditIndex = favourites.findIndex((item) =>
      isEqual(item, selectedFavouriteDish)
    );

    if (favouriteToEditIndex !== -1) {
      favourites[favouriteToEditIndex] = { ...favourites[favouriteToEditIndex], [key]: newObject };
      setFavouriteDishes(favourites);
      setSelectedFavouriteDish({ ...favourites[favouriteToEditIndex], [key]: newObject });
    }
  };

  const changeIngredientsInFavourites = (ingredient: Ingredient, baseKey: string) => {
    const newIngredient = { id: ingredient.id, name: ingredient.name };

    let selected = [...selectedFavouriteDish.ingredients];
    const founded = selected.find((item) => item.id === newIngredient.id);
    if (founded) {
      selected.filter((ing) => ing.id !== founded.id);
    } else {
      selected.push(newIngredient);
    }

    const updatedIngredients = selected;
    setChangedFavouriteDish(baseKey, updatedIngredients);
  };

  const changeExtraIngredientsInFavourite = (ingredient: ExtraIngredient, baseKey: string) => {
    const newIngredient = {
      id: ingredient.id,
      name: ingredient.name,
      currency: ingredient.currency,
      price: ingredient.price,
    };
    let selected = [...selectedFavouriteDish.extraIngredient];
    const founded = selected.find((item) => item.id === newIngredient.id);
    if (founded) {
      selected.filter((ing) => ing.id !== founded.id);
    } else {
      selected.push(newIngredient);
    }
    const updatedIngredients = selected;
    setChangedFavouriteDish(baseKey, updatedIngredients);
  };

  return (
    <DishContext.Provider
      value={{
        dish,
        setDish,
        favouriteDishes,
        setFavouriteDishes,
        selectedFavouriteDish,
        setSelectedFavouriteDish,
        updateFavouritesDishes,
        isFavouriteDish,
        deleteFavouriteDish,
        setChangedFavouriteDish,
        changeIngredientsInFavourites,
        changeExtraIngredientsInFavourite,
      }}>
      {children}
    </DishContext.Provider>
  );
};
