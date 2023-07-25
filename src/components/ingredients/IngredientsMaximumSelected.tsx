import styled from 'styled-components/native';
import { useIngredients, useSize } from '../../hooks';
import { lowercaseString } from '../../utils';
import { InformationalStar } from '../InformationalStar';

export const IngredientsMaximumSelected = () => {
  const { isReachedMaxNumbersOfIngrediants, maximumIngredientsPerSize } = useIngredients();
  const {
    selectedSize: { name },
  } = useSize();
  const renderCondition = isReachedMaxNumbersOfIngrediants && maximumIngredientsPerSize > 0;
  return renderCondition ? (
    <StyledText>
      <InformationalStar />
      {`You've chosen the maximum amout of ingrediants for a ${lowercaseString(name)} size bowl.`}
    </StyledText>
  ) : null;
};

const StyledText = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.default};
    line-height: ${theme.lineHeights.default};
    font-weight: ${theme.fontWeights.default};
    letter-spacing: ${theme.letterSpacing.default};
`
);
