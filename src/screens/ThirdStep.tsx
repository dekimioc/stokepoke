import { NavigationProp, useNavigation } from '@react-navigation/native';
import { FlexRow, Page, PrimaryButton, SecondaryButton } from '../components';
import { ExtraIngredient } from '../components/extraIngredients';
import { ButtonText, HomeStackParamList, Screens } from '../types';

export const ThirdStep = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <Page progressBar>
      <ExtraIngredient />
      <FlexRow gap={15} marginBottom={50}>
        <SecondaryButton text={ButtonText.back} onPress={() => navigation.goBack()} />
        <PrimaryButton
          text={ButtonText.next}
          onPress={() => navigation.navigate({ name: Screens.FourthStep, key: Screens.FourthStep })}
        />
      </FlexRow>
    </Page>
  );
};
