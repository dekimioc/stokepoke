import styled from 'styled-components/native';
import { useIngredients } from '../../hooks/useIngredients';

export const IngredientsMaximumSelected = () => {
  const { isReachedMaxNumbersOfIngrediants, maximumIngredientsPerSize } = useIngredients();
  const renderCondition = isReachedMaxNumbersOfIngrediants && maximumIngredientsPerSize > 0;
  return renderCondition ? (
    <StyledText>
      <Star>*</Star> You've chosen the maximum amout of ingrediants for a medium size bowl.
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

const Star = styled(StyledText)(
  ({ theme }) => `
  color: ${theme.colors.secondary}
`
);
