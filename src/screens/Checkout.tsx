import React, { FC } from 'react';
import { Formik } from 'formik';
import { Header, Page } from '../components';
import { checkoutSchema } from '../components/checkoutForm/CheckoutFormValidation';
import { useCart } from '../hooks';
import { CheckoutOverview } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface CheckoutFormData {
  fullName: string;
  address: string;
  phone: string;
  notes: string;
  paymentMethod: string;
}

const defaults = {
  fullName: '',
  address: '',
  phone: '',
  notes: '',
  paymentMethod: '',
};
export const Checkout: FC<React.PropsWithChildren> = () => {
  const { cartItems } = useCart();

  return (
    <Page>
      <Header text="Delivery details" marginBottom={20} />
      {cartItems.length > 0 ? (
        <KeyboardAwareScrollView>
          <Formik initialValues={defaults} onSubmit={() => {}} validationSchema={checkoutSchema}>
            <CheckoutOverview />
          </Formik>
        </KeyboardAwareScrollView>
      ) : (
        <Header primary={false} text={'Succes!'} />
      )}
    </Page>
  );
};
