import { createDrawerNavigator } from '@react-navigation/drawer';
import { BottomTabNavigator } from './BottomTabNavigator';
import { IconButton } from '../../components';
import { HamburgerIcon, LogoIcon } from '../../../assets/svg';
import { CustomDrawerContent } from '../components';
import { useTheme } from '../../hooks';
import { Navigators } from '../../types';

export const MainNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ navigation }) => ({
        headerLeft: () => <IconButton icon={<HamburgerIcon />} onPress={navigation.toggleDrawer} />,
        headerRight: () => <LogoIcon />,
        headerTitle: '',
        headerLeftContainerStyle: {
          paddingLeft: 15,
        },
        headerRightContainerStyle: {
          paddingRight: 15,
        },
        drawerPosition: 'right',
        drawerContentContainerStyle: {
          paddingLeft: 30,
        },
        drawerItemStyle: {
          paddingLeft: 30,
        },
      })}>
      <Drawer.Screen name={Navigators.BottomTabNavigator} component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};
