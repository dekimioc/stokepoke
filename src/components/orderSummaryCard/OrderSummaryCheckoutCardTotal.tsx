import { useCart, useTheme } from '../../hooks';
import { FlexRow } from '../layout';
import { BodyText, Header } from '../typography';

export const OrderSummaryCheckoutCardTotal = () => {
  const { totalCartAmount } = useCart();
  const { theme } = useTheme();
  return (
    <FlexRow
      paddingTop={20}
      justifyContent="space-between"
      borderTopColor={theme.colors.thernary}
      borderTopWidth={1}>
      <BodyText primary={false} text="Total" />
      <Header primary={false} text={`$${totalCartAmount}`} />
    </FlexRow>
  );
};
