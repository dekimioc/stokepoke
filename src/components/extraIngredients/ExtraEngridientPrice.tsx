import { Box, FlexColumn, FlexRow } from '../layout';
import { BodyText, Header } from '../typography';

export const ExtraIngredientPrice = () => {
  return (
    <Box marginBottom={30}>
      <FlexColumn gap={20}>
        <FlexRow justifyContent="space-between">
          <BodyText text="Regular price" />
          <Header text=" $6.99 " />
        </FlexRow>
        <FlexRow justifyContent="space-between">
          <BodyText text="Price with extra ingredients" />
          <Header text="$9.97" />
        </FlexRow>
      </FlexColumn>
    </Box>
  );
};
