import {
  BodyText,
  Box,
  Checkbox,
  FlexColumn,
  Header,
  Page,
  PokeBowlSelection,
  PrimaryButton,
} from '../components';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { HomeStackParamList, Screens } from '../types';
import { useBowls } from '../hooks';
import { useCallback } from 'react';

export const FirstStep = () => {
  const navigation = useNavigation<NavigationProp<HomeStackParamList>>();
  const { bowls, loading } = useBowls();

  const renderBowls = useCallback(() => {
    if (loading) return <BodyText text="Loading..." />;
    if (bowls) {
      return <PokeBowlSelection bowls={bowls} />;
    }
  }, [bowls, loading]);

  return (
    <Page>
      <Box marginBottom={30}>
        <FlexColumn gap={20}>
          <FlexColumn gap={10}>
            <Header text="Make your own poke bowl" />
            <BodyText text="Select the type of bowl your&#39;d like, the size, add the base, sauce and all the added ingredients. We&#39;ll take care of the rest!" />
          </FlexColumn>
          {renderBowls()}
        </FlexColumn>
      </Box>
      <PrimaryButton
        text="NEXT"
        onPress={() => navigation.navigate({ name: Screens.SecondStep, key: Screens.SecondStep })}
      />
    </Page>
  );
};
