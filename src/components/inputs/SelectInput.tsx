import React, { useCallback, useState } from 'react';
import { View, Modal, TextInputProps } from 'react-native';
import styled from 'styled-components/native';
import { BaseLabel } from './BaseLabel';
import { ArrowDown } from '../../../assets/svg';
import { FlexColumn } from '../layout';
import { useTheme } from '../../hooks';
import { Header } from '../typography';

type Item = {
  label: string;
  value: string;
};

type InputSelectProps = {
  label: string;
  placeholder: string;
  items: Item[];
  selectedValue: string;
  onSelect: (value: string) => void;
  isRequired: boolean;
  error?: boolean;
} & TextInputProps;

export const InputSelect: React.FC<InputSelectProps> = ({
  label,
  items,
  selectedValue,
  placeholder,
  onSelect,
  isRequired,
  error,
  ...rest
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useTheme();
  const handleSelect = (value: string) => {
    setModalVisible(false);
    onSelect(value);
  };

  const getStyle = useCallback(() => {
    return {
      style: {
        color: `${!selectedValue.length ? theme.colors.grayLight : theme.colors.primary}`,
      },
    };
  }, [selectedValue]);
  return (
    <View>
      <FlexColumn gap={8}>
        <BaseLabel isRequired={isRequired}>{label}</BaseLabel>
        <SelectButton error={error} onPress={() => setModalVisible(true)}>
          <SelectedValueContainer>
            <SelectedValue {...getStyle()} {...rest}>
              {!selectedValue.length ? placeholder : selectedValue}
            </SelectedValue>
            <ArrowDown />
          </SelectedValueContainer>
        </SelectButton>
      </FlexColumn>
      <Modal visible={modalVisible} animationType="fade" transparent>
        <ModalBackground>
          <ModalContent>
            <HeaderContainer>
              <Header text="Select Payment Method" />
            </HeaderContainer>
            {items.map((item) => (
              <StyledSelectOptions key={item.value} onPress={() => handleSelect(item.value)}>
                <Header text={item.label} />
              </StyledSelectOptions>
            ))}
          </ModalContent>
        </ModalBackground>
      </Modal>
    </View>
  );
};

const Label = styled.Text(
  ({ theme }) => `
    color: ${theme.colors.primary};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.default};
    font-style: ${theme.fontStyles.default};
`
);

const SelectButton = styled.TouchableOpacity<{ error?: boolean }>(
  ({ theme, error }) => `
     border: 1px solid ${error ? theme.colors.secondary : theme.colors.primary};
    border-radius: ${theme.borderRadius.default};
    padding: ${theme.spacing.spacing12};
`
);

const SelectedValue = styled.Text(
  ({ theme }) => `
  font-size: ${theme.fontSizes.body};
  font-weight: ${theme.fontWeights.default};
  font-style: ${theme.fontStyles.default};
`
);

const ModalBackground = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalContent = styled.View(
  ({ theme }) => `
    background-color: ${theme.colors.background};
    padding: ${theme.spacing.spacing20};
`
);

const StyledSelectOptions = styled.TouchableOpacity(
  ({ theme }) => `
    border: 1px solid ${theme.colors.secondary};
    margin-bottom: ${theme.spacing.spacing8};
    padding: ${theme.spacing.spacing8};
    border-radius: ${theme.borderRadius.default};
`
);

const HeaderContainer = styled.View(
  ({ theme }) => `
    margin-bottom: ${theme.spacing.spacing15};
    justify-content: center;
    flex-direction: row
`
);

const SelectedValueContainer = styled.View(
  ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between
`
);
