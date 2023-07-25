import {
  NavigationProp,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
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
import { ButtonText, HomeScreenNavigationProps, HomeStackParamList, Screens } from '../types';
import { useBase, useSize, useSteps } from '../hooks';
import { useEffect, useMemo } from 'react';

export const SecondStep = () => {
  const navigation = useNavigation<HomeScreenNavigationProps>();
  const { params } = useRoute<RouteProp<HomeStackParamList, Screens.SecondStep>>();

  const { selectedSize } = useSize();
  const { selectedBase } = useBase();
  const { setCurrentStep } = useSteps();

  useFocusEffect(() => {
    setCurrentStep(2);
  });
  const disabled = useMemo(
    () => !selectedBase.id && !selectedSize.id,
    [selectedBase, selectedSize]
  );

  const buttonBackHandler = () => {
    navigation.goBack();
  };

  const nextHandler = () => {
    if (params) {
      if (params.isFavouriteEdit) {
        navigation.navigate({
          name: Screens.ThirdStep,
          key: Screens.ThirdStep,
          params: { isFavouriteEdit: true },
        });
      }
    } else {
      navigation.navigate({
        name: Screens.ThirdStep,
        key: Screens.ThirdStep,
      });
    }
  };

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
        <SecondaryButton fontWeight text={ButtonText.back} onPress={buttonBackHandler} />
        <PrimaryButton
          disabled={disabled}
          withIcon
          fontWeight
          text={ButtonText.next}
          onPress={nextHandler}
        />
      </FlexRow>
    </Page>
  );
};
