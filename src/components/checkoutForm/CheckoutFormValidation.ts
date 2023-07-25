import * as Yup from 'yup';
const phoneNumberRegex =
  /^(?:\+?)(?:\d{1,3})?[ -]?\(?(\d{1,4})\)?[ -]?(?:\d{1,3})?[ -]?(\d{1,4})[ -]?(\d{1,4})$/;

export const checkoutSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter full name'),
  address: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Please enter address'),
  paymentMethod: Yup.string().required('Please choose a payment method'),
  // phone: Yup.string().matches(phoneNumberRegex, 'Invalid phone number'),
  phone: Yup.string().required('enter erer'),
});
