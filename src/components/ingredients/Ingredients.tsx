import { MainSelection } from '../MainSelection';
import { IngredientsMaximumSelected } from './IngredientsMaximumSelected';
import { IngredientsOptions } from './IngredientsOptions';

export const Ingredients = () => {
  return (
    <MainSelection
      headerText="Pick other ingredients"
      subheadingText="Pick up to 5, 8 or 10 ingredients based on bowl size.">
      <IngredientsOptions />
      <IngredientsMaximumSelected />
    </MainSelection>
  );
};
