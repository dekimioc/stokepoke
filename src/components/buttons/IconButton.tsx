import { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

type IconButtonProps = {
  iconHaveState?: boolean;
  primaryIcon: React.ReactNode;
  secondaryIcon?: React.ReactNode;
  secondaryPress?: () => void;
} & TouchableOpacityProps;

export const IconButton: FC<IconButtonProps> = ({
  iconHaveState,
  primaryIcon,
  secondaryIcon,
  secondaryPress,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={secondaryIcon && iconHaveState ? secondaryPress : onPress} {...rest}>
      {secondaryIcon && iconHaveState ? secondaryIcon : primaryIcon}
    </TouchableOpacity>
  );
};
