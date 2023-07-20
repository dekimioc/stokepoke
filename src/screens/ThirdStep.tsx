import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BodyText, FlexRow, Page, PrimaryButton, SecondaryButton } from '../components';
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
          onPress={() => navigation.navigate({ name: Screens.ThirdStep, key: Screens.ThirdStep })}
        />
      </FlexRow>
    </Page>
  );
};
