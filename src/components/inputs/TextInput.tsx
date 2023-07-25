import { FC, useCallback } from 'react';
import { styled } from 'styled-components/native';
import { useTheme } from '../../hooks';
import { FlexColumn } from '../layout';
import { BaseLabel } from './BaseLabel';
import { TextInputProps as DefaultTextInputProps } from 'react-native';

export type TextInputProps = {
  label: string;
  isRequired: boolean;
  error?: boolean;
} & DefaultTextInputProps;

export const TextInput: FC<TextInputProps> = ({ label, isRequired, error, ...rest }) => {
  const { theme } = useTheme();

  const getErrorsHandler = useCallback(() => {
    return {
      style: {
        border: `1px solid red`,
      },
    };
  }, [error]);

  return (
    <FlexColumn gap={8}>
      <BaseLabel isRequired={isRequired}>{label}</BaseLabel>
      <StyledTextInput error={error} {...rest} placeholderTextColor={theme.colors.grayLight} />
    </FlexColumn>
  );
};

const StyledTextInput = styled.TextInput<{ error?: boolean }>(
  ({ theme, error }) => `
    border: 1px solid ${error ? theme.colors.secondary : theme.colors.primary};
    border-radius: ${theme.borderRadius.default};
    padding: ${theme.spacing.spacing12};
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.default};
    font-style: ${theme.fontStyles.default};
    margin-bottom: ${theme.spacing.spacing5};
`
);
