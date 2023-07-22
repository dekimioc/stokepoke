import { useDish } from '../../hooks';
import { CardTitle } from '../CardTitle';
import { Box } from '../layout';
import { DishCardContent } from './DishCardContent';

export const DishCard = () => {
  const { dish } = useDish();
  const {
    bowl: { name },
  } = dish;
  return (
    <Box marginBottom={30}>
      <CardTitle title={name} currency={'$'} price={'10'} />
      <DishCardContent />
    </Box>
  );
};
