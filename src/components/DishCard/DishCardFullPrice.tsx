import { usePrice, useTheme } from '../../hooks';
import { convertToTwoDecimals } from '../../utils';
import { FlexRow } from '../layout';
import { BodyText, Header } from '../typography';

export const DishCardFullPrice = () => {
  const { theme } = useTheme();
  const { totalPrice } = usePrice();

  return (
    <FlexRow
      borderTopWidth={1}
      borderTopColor={theme.colors.thernary}
      justifyContent="space-between"
      paddingTop={20}>
      <BodyText primary={false} text="Full price" />
      <Header primary={false} text={`$${convertToTwoDecimals(totalPrice)}`} />
    </FlexRow>
  );
};
