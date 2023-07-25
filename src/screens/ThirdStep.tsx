import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { FlexRow, Page, PrimaryButton, SecondaryButton } from '../components';
import { ExtraIngredient } from '../components/extraIngredients';
import { ButtonText, HomeScreenNavigationProps, HomeStackParamList, Screens } from '../types';
import { useEffect } from 'react';
import { useSteps } from '../hooks';

export const ThirdStep = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.ThirdStep>>();
  const { setCurrentStep } = useSteps();

  useFocusEffect(() => {
    setCurrentStep(3);
  });
  const nextHandler = () => {
    if (params) {
      if (params.isFavouriteEdit) {
        navigation.navigate({
          name: Screens.FourthStep,
          key: Screens.FourthStep,
          params: { isFavouriteEdit: true },
        });
      }
    } else {
      navigation.navigate({
        name: Screens.FourthStep,
        key: Screens.FourthStep,
      });
    }
  };
  return (
    <Page progressBar>
      <ExtraIngredient />
      <FlexRow gap={15} marginBottom={50}>
        <SecondaryButton fontWeight text={ButtonText.back} onPress={() => navigation.goBack()} />
        <PrimaryButton fontWeight withIcon text={ButtonText.next} onPress={nextHandler} />
      </FlexRow>
    </Page>
  );
};
