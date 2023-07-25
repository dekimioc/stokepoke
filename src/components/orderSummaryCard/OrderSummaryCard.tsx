import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { useCart, useDish } from '../../hooks';
import {
  ButtonText,
  CartScreenNavigationProps,
  HomeScreenNavigationProps,
  Screens,
} from '../../types';
import { PrimaryButton, SecondaryButton } from '../buttons';
import { Box, FlexColumn, FlexRow } from '../layout';
import { BodyText, Header } from '../typography';

export const OrderSummaryCard = () => {
  const { totalCartAmount } = useCart();
  const { useReset } = useDish();

  const navigation =
    useNavigation<CompositeNavigationProp<HomeScreenNavigationProps, CartScreenNavigationProps>>();

  const orderMore = () => {
    useReset();
    navigation.navigate({
      name: Screens.FirstStep,
      key: Screens.FirstStep,
      params: {
        isFavouriteEdit: false,
      },
    });
  };

  return (
    <Box gap={30}>
      <FlexColumn gap={10}>
        <FlexRow justifyContent="space-between">
          <BodyText text={'Subtotal'} />
          <Header text={`$${totalCartAmount}`} />
        </FlexRow>
        <FlexRow justifyContent="space-between">
          <BodyText text={'Delivery free'} />
          <Header text="0" />
        </FlexRow>
        <FlexRow justifyContent="space-between">
          <Header text={'Total'} />
          <Header primary={false} text={`$${totalCartAmount}`} />
        </FlexRow>
      </FlexColumn>
      <FlexColumn gap={15}>
        <SecondaryButton fontWeight text={ButtonText.order} onPress={orderMore} />
        <PrimaryButton
          fontWeight
          colored
          text={ButtonText.proceed}
          onPress={() => navigation.navigate({ name: Screens.Checkout, key: Screens.Checkout })}
        />
      </FlexColumn>
    </Box>
  );
};
