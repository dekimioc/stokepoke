import { CardTitle } from '../CardTitle';
import { IconButton } from '../buttons';
import { Box, FlexRow } from '../layout';
import { StarIcon, DeleteIcon } from '../../../assets/svg';
import { useTheme } from '../../hooks';
import { CartQuantity } from './CartQuantity';

export const CartCard = () => {
  const { theme } = useTheme();
  return (
    <Box marginBottom={15}>
      <CardTitle title={'Salmon poke bowl'} currency={'$'} price={'9.97'} />
      <FlexRow justifyContent="space-between">
        <FlexRow gap={15}>
          <IconButton
            primaryIcon={<StarIcon color={theme.colors.primary} />}
            secondaryIcon={<StarIcon color={theme.colors.transparent} />}
            secondaryPress={() => console.log('secondary')}
            onPress={() => console.log('primary')}
          />
          <IconButton primaryIcon={<DeleteIcon />} onPress={() => console.log('fafafa')} />
        </FlexRow>
        <CartQuantity />
      </FlexRow>
    </Box>
  );
};
