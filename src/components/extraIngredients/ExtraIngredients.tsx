import { MainSelection } from '../MainSelection';
import { Box, FlexColumn } from '../layout';
import { ExtraIngredientPrice } from './ExtraEngridientPrice';
import { ExtraIngredientsOptions } from './ExtraIngredientsOptions';

export const ExtraIngredient = () => {
  return (
    <FlexColumn>
      <Box marginBottom={15}>
        <MainSelection
          headerText="Pick an extra ingredient"
          subheadingText="Weather its more sashimi or an ingrediant you&#39;d like to try out, feel free to add whatever you&#39;d like.">
          <ExtraIngredientsOptions />
        </MainSelection>
      </Box>
      <ExtraIngredientPrice />
    </FlexColumn>
  );
};
