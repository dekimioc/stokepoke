import { useFormikContext } from 'formik';
import {
  CheckoutForm,
  CheckoutFormData,
  FlexColumn,
  OrderSummaryCheckoutCard,
  PrimaryButton,
  SecondaryButton,
} from '..';
import { ButtonText, CartScreenNavigationProps } from '../../types';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../hooks';
import { useCallback, useMemo } from 'react';

export const CheckoutOverview = () => {
  const navigation = useNavigation<CartScreenNavigationProps>();
  const { errors, handleSubmit, touched } = useFormikContext<CheckoutFormData>();
  const { placeOrder } = useCart();

  const isErrors = useMemo(
    () => !!Object.keys(errors).length || !Object.keys(touched).length,
    [errors, touched]
  );

  return (
    <>
      <CheckoutForm />
      <OrderSummaryCheckoutCard />
      <FlexColumn gap={15} marginBottom={50}>
        <SecondaryButton
          fontWeight
          text={ButtonText.backToCart}
          onPress={() => navigation.goBack()}
        />
        <PrimaryButton
          fontWeight
          colored
          text={ButtonText.placeOrder}
          onPress={() => {
            placeOrder(isErrors);
            handleSubmit();
          }}
        />
      </FlexColumn>
    </>
  );
};
