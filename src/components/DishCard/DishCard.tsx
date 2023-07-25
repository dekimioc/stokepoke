import { useDish, usePrice } from '../../hooks';
import { convertToTwoDecimals } from '../../utils';
import { CardTitle } from '../CardTitle';
import { Box } from '../layout';
import { DishCardContent } from './DishCardContent';

export const DishCard = () => {
  const { dish } = useDish();
  const { sizePrice } = usePrice();
  const {
    bowl: { name },
  } = dish;
  return (
    <Box marginBottom={30}>
      <CardTitle title={name} currency={'$'} price={`${convertToTwoDecimals(sizePrice)}`} />
      <DishCardContent />
    </Box>
  );
};
