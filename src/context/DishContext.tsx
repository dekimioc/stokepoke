import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Dish } from '../types';
import { dishDefaults } from '../defaults';
import isEqual from 'lodash.isequal';

type DishContextType = {
  dish: Dish;
  setDish: (arg: Dish) => void;
  favouriteDishes: Dish[];
  setFavouriteDishes: (arg: Dish[]) => void;
  selectedFavouriteDish: Dish;
  setSelectedFavouriteDish: (arg: Dish) => void;
  deleteDish: (arg: Dish) => void;
};

export const DishContext = createContext<DishContextType>({
  dish: dishDefaults,
  setDish: () => {},
  favouriteDishes: [],
  setFavouriteDishes: () => {},
  selectedFavouriteDish: dishDefaults,
  setSelectedFavouriteDish: () => {},
  deleteDish: () => {},
});
export const DishProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [dish, setDish] = useState<Dish>(dishDefaults);
  const [favouriteDishes, setFavouriteDishes] = useState<Dish[]>([]);
  const [selectedFavouriteDish, setSelectedFavouriteDish] = useState<Dish>(dishDefaults);

  const deleteDish = (selected: Dish) => {
    //   console.log(selected, 'selected');
    //   // setFavouriteDishes(favouriteDishes.filter((d) => isEqual(d, selected)));
    //   // console.log('treigered');
  };

  return (
    <DishContext.Provider
      value={{
        dish,
        setDish,
        favouriteDishes,
        setFavouriteDishes,
        selectedFavouriteDish,
        setSelectedFavouriteDish(arg) {},
        deleteDish,
      }}>
      {children}
    </DishContext.Provider>
  );
};
