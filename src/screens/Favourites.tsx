import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { CartCard, EmptyMessage, FavouritesCard, Page } from '../components';
import { useFavouriteDishes } from '../hooks/useFavouriteDishes';
import { FavouritesStackParamList, HomeStackParamList } from '../types';
import { useCallback } from 'react';

export const Favourites = () => {
  const { favouriteDishes } = useFavouriteDishes();

  type TestProps = CompositeNavigationProp<
    NavigationProp<HomeStackParamList>,
    NavigationProp<FavouritesStackParamList>
  >;

  const navigation = useNavigation<TestProps>();

  const getFavouritesItems = useCallback(() => {
    if (!!favouriteDishes.length) {
      return favouriteDishes.map((item) => <FavouritesCard {...item} />);
    } else {
      return <EmptyMessage message={'No favourite items selected.'} />;
    }
  }, [favouriteDishes]);

  return (
    <Page>
      <>{getFavouritesItems()}</>
    </Page>
  );
};
