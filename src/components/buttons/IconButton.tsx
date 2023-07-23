import { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

type IconButtonProps = {
  icon?: React.ReactNode;
} & TouchableOpacityProps;

export const IconButton: FC<IconButtonProps> = ({ icon, ...rest }) => {
  return <TouchableOpacity {...rest}>{icon}</TouchableOpacity>;
};
