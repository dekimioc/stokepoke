import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { Dish } from '../types';
import { dishDefaults } from '../defaults';

type DishContextType = {
  dish: Dish;
  setDish: (arg: Dish) => void;
  favouriteDishes: Dish[];
  setFavouriteDishes: (arg: Dish[]) => void;
  selectedFavouriteDish: Dish;
  setSelectedFavouriteDish: (arg: Dish) => void;
};

export const DishContext = createContext<DishContextType>({
  dish: dishDefaults,
  setDish: () => {},
  favouriteDishes: [],
  setFavouriteDishes: () => {},
  selectedFavouriteDish: dishDefaults,
  setSelectedFavouriteDish: () => {},
});
export const DishProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [dish, setDish] = useState<Dish>(dishDefaults);
  const [favouriteDishes, setFavouriteDishes] = useState<Dish[]>([]);
  const [selectedFavouriteDish, setSelectedFavouriteDish] = useState<Dish>(dishDefaults);
  // const { selectedBase } = useBase();
  // const { selectedBowl } = useBowls();
  // const { selectedExtraIngredients } = useExtraIngredients();
  // const { selectedIngredients } = useIngredients();
  // const { selectedSauce } = useSauce();
  // const { selectedSize } = useSize();

  // useEffect(() => {
  //   setDish({
  //     base: selectedBase,
  //     bowl: selectedBowl,
  //     extraIngredient: selectedExtraIngredients,
  //     ingredients: selectedIngredients,
  //     sauce: selectedSauce,
  //     size: selectedSize,
  //   });
  // }, [
  //   selectedBase,
  //   selectedBowl,
  //   selectedExtraIngredients,
  //   selectedIngredients,
  //   selectedSauce,
  //   selectedSize,
  // ]);

  // console.log(favouriteDishes, 'favouritedishes');

  return (
    <DishContext.Provider
      value={{
        dish,
        setDish,
        favouriteDishes,
        setFavouriteDishes,
        selectedFavouriteDish,
        setSelectedFavouriteDish(arg) {},
      }}>
      {children}
    </DishContext.Provider>
  );
};
