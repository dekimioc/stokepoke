import { FC } from 'react';
import { CardTitle } from '../CardTitle';
import { Box, FlexColumn, FlexRow } from '../layout';
import { ButtonText, Dish } from '../../types';
import { IconButton, PrimaryButton, SecondaryButton } from '../buttons';
import { StarIcon } from '../../../assets/svg';
import { useTheme } from '../../hooks';
import { BaseCardContent } from '../baseCardElements';

export const FavouritesCard: FC<Dish> = (dish) => {
  const { theme } = useTheme();

  return (
    <Box marginBottom={15}>
      <CardTitle title={dish.bowl.name} currency={'$'} price={'100'} />
      <BaseCardContent {...dish} />
      <FlexColumn gap={15}>
        <SecondaryButton text={ButtonText.edit} />
        <FlexRow gap={15}>
          <IconButton
            primaryIcon={<StarIcon color={theme.colors.primary} />}
            onPress={() => console.log('test')}
          />
          <PrimaryButton text={ButtonText.cart} />
        </FlexRow>
      </FlexColumn>
    </Box>
  );
};