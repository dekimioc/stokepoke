import { BodyText, Page, PrimaryButton } from '../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList, Screens } from '../types';

export const FirstStep = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  return (
    <Page>
      <BodyText text="FIRST STEP" />
      <PrimaryButton
        text="NEXT"
        onPress={() => navigation.navigate({ name: Screens.SecondStep, key: Screens.SecondStep })}
      />
    </Page>
  );
};
