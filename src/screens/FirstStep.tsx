import { Page, PokeBowl, PrimaryButton } from '../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ButtonText, HomeStackParamList, Screens } from '../types';

export const FirstStep = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();

  return (
    <Page>
      <PokeBowl />
      <PrimaryButton
        text={ButtonText.next}
        onPress={() => navigation.navigate({ name: Screens.SecondStep, key: Screens.SecondStep })}
      />
    </Page>
  );
};
