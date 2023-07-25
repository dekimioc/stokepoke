import { FC } from 'react';
import { BodyText, FlexRow, IconButton } from '../../components';
import styled from 'styled-components/native';
import { CloseIcon, PinIcon } from '../../../assets/svg';
import { Screens } from '../../types';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

export const CustomDrawerContent: FC<DrawerContentComponentProps> = ({ navigation }) => {
  return (
    <StyledSafeAreaView>
      <FlexRow paddingRight={15} paddingTop={7} justifyContent="flex-end">
        <IconButton onPress={() => navigation.closeDrawer()} icon={<CloseIcon />} />
      </FlexRow>
      <MenuItem
        onPress={() => navigation.navigate({ name: Screens.Locations, key: Screens.Locations })}>
        <PinIcon />
        <BodyText text="Our locations" />
      </MenuItem>
    </StyledSafeAreaView>
  );
};

const StyledSafeAreaView = styled.SafeAreaView(
  ({ theme }) => `
    flex: 1;
    background-color: ${theme.colors.backgroundPrimary};
`
);

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  flex-grow: 7;
  padding-left: 30px;
  gap: 10px;
`;
