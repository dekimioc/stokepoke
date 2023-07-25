import { useState } from 'react';
import { useFormikContext } from 'formik';
import { Box, FlexColumn } from '../layout';
import { MultilineInput, TextInput, InputSelect } from '../inputs';
import { InputLabels } from '../../types';
import React from 'react';
import { useCart } from '../../hooks';
import { CheckoutFormErrorMessage } from './CheckoutFormErrorMessage';
import { View } from 'react-native';

export interface CheckoutFormData {
  fullName: string;
  address: string;
  phone: string;
  notes: string;
  paymentMethod: string;
}

const options = [
  { label: 'Cash', value: 'Cash' },
  { label: 'Card', value: 'Card' },
];

export const CheckoutForm = () => {
  const { isErrorsVisible } = useCart();
  const handleSelect = (value: string) => {
    setFieldValue('paymentMethod', value);
  };

  const { handleChange, values, handleBlur, errors, setFieldValue } =
    useFormikContext<CheckoutFormData>();

  return (
    <Box marginBottom={15}>
      <FlexColumn gap={20}>
        <View>
          <TextInput
            label={InputLabels.fullName}
            isRequired
            onChangeText={handleChange('fullName')}
            onBlur={handleBlur('fullName')}
            value={values.fullName}
            error={!!errors.fullName?.length && isErrorsVisible}
            placeholder="e.g John Doe"
          />
          {isErrorsVisible && errors.fullName && (
            <CheckoutFormErrorMessage message={errors.fullName} />
          )}
        </View>
        <View>
          <TextInput
            label={InputLabels.address}
            isRequired
            onChangeText={handleChange('address')}
            onBlur={handleBlur('address')}
            value={values.address}
            error={!!errors.address?.length && isErrorsVisible}
            placeholder="e.g 24 Main street, LA"
          />
          {isErrorsVisible && errors.address && (
            <CheckoutFormErrorMessage message={errors.address} />
          )}
        </View>
        <View>
          <TextInput
            keyboardType="numeric"
            label={InputLabels.phoneNumber}
            isRequired
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
            error={!!errors.phone?.length && isErrorsVisible}
            placeholder={'e.g. +61 434561230'}
          />
          {isErrorsVisible && errors.phone && <CheckoutFormErrorMessage message={errors.phone} />}
        </View>
        <View>
          <InputSelect
            isRequired
            label="Cash or card"
            placeholder="Choose a payment method"
            items={options}
            selectedValue={values.paymentMethod}
            onBlur={handleBlur('paymentMethod')}
            onSelect={handleSelect}
            value={values.paymentMethod}
            error={!!errors.paymentMethod?.length && isErrorsVisible}
          />
          {isErrorsVisible && errors.paymentMethod && (
            <CheckoutFormErrorMessage message={errors.paymentMethod} />
          )}
        </View>
        <View>
          <MultilineInput
            label={InputLabels.notes}
            isRequired={false}
            onChangeText={handleChange('notes')}
            onBlur={handleBlur('notes')}
            value={values.notes}
            placeholder="Write a note"
            error={!!errors.notes?.length && isErrorsVisible}
          />
          {isErrorsVisible && errors.notes && <CheckoutFormErrorMessage message={errors.notes} />}
        </View>
      </FlexColumn>
    </Box>
  );
};
