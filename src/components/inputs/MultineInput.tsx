import { FC, useCallback } from 'react';
import { TextInput, TextInputProps } from './TextInput';

export const MultilineInput: FC<TextInputProps> = ({ label, placeholder, isRequired }) => {
  const getStyle = useCallback(() => {
    return {
      style: {
        height: 150,
      },
    };
  }, []);

  return (
    <TextInput
      label={label}
      isRequired={isRequired}
      placeholder={placeholder}
      multiline
      numberOfLines={20}
      {...getStyle()}
    />
  );
};
