import { Box, FlexColumn, FlexRow } from '../layout';
import { BodyText, Header } from '../typography';
import { convertToTwoDecimals } from '../../utils';
import { usePrice } from '../../hooks';

export const ExtraIngredientPrice = () => {
  const { sizePrice, totalPrice } = usePrice();

  return (
    <Box marginBottom={30}>
      <FlexColumn gap={20}>
        <FlexRow justifyContent="space-between">
          <BodyText text="Regular price" />
          <Header text={`$${convertToTwoDecimals(sizePrice)}`} />
        </FlexRow>
        <FlexRow justifyContent="space-between">
          <BodyText primary={false} text="Price with extra ingredients" />
          <Header primary={false} text={`$${convertToTwoDecimals(totalPrice)}`} />
        </FlexRow>
      </FlexColumn>
    </Box>
  );
};
