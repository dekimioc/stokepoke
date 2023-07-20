import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  Base,
  Box,
  FlexColumn,
  FlexRow,
  Page,
  PrimaryButton,
  Sauce,
  SecondaryButton,
  Size,
  Ingredients,
} from '../components';
import { ButtonText, HomeStackParamList, Screens } from '../types';

export const SecondStep = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <Page progressBar>
      <Box marginBottom={30}>
        <FlexColumn gap={30}>
          <Size />
          <Base />
          <Sauce />
          <Ingredients />
        </FlexColumn>
      </Box>
      <FlexRow gap={15} marginBottom={50}>
        <SecondaryButton text={ButtonText.back} onPress={() => navigation.goBack()} />
        <PrimaryButton
          text={ButtonText.next}
          onPress={() => navigation.navigate({ name: Screens.ThirdStep, key: Screens.ThirdStep })}
        />
      </FlexRow>
    </Page>
  );
};
