import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Cart, Dish } from '../types';
import { dishDefaults } from '../defaults';
import isEqual from 'lodash.isequal';
import omit from 'lodash.omit';

type FavouriteDishContextType = {
  favouriteDishes: Dish[];
  setFavouriteDishes: (arg: Dish[]) => void;
  selectedFavouriteDish: Dish;
  setSelectedFavouriteDish: (arg: Dish) => void;
  updateFavouritesDishes: (arg: Dish) => void;
};

export const FavouriteDishContext = createContext<FavouriteDishContextType>({
  favouriteDishes: [],
  setFavouriteDishes: () => {},
  selectedFavouriteDish: dishDefaults,
  setSelectedFavouriteDish: () => {},
  updateFavouritesDishes: () => {},
});
export const FavouriteDishProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favouriteDishes, setFavouriteDishes] = useState<Dish[]>([]);
  const [selectedFavouriteDish, setSelectedFavouriteDish] = useState<Dish>(dishDefaults);

  const updateFavouritesDishes = (dish: Dish) => {
    if (!!favouriteDishes.length) {
      favouriteDishes.map((favourite) => {
        if (isEqual(favourite, dish)) {
          setFavouriteDishes(favouriteDishes.filter((d) => !isEqual(d, dish)));
        } else {
          setFavouriteDishes([...favouriteDishes, dish]);
        }
      });
    } else {
      setFavouriteDishes([...favouriteDishes, { ...dish }]);
    }
  };

  return (
    <FavouriteDishContext.Provider
      value={{
        favouriteDishes,
        setFavouriteDishes,
        selectedFavouriteDish,
        setSelectedFavouriteDish,
        updateFavouritesDishes,
      }}>
      {children}
    </FavouriteDishContext.Provider>
  );
};
