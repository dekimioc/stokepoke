import { CompositeNavigationProp, NavigationProp, useNavigation } from '@react-navigation/native';
import { CartCard, FavouritesCard, Page } from '../components';
import { useFavouriteDishes } from '../hooks/useFavouriteDishes';
import { FavouritesStackParamList, HomeStackParamList } from '../types';

export const Favourites = () => {
  const { favouriteDishes } = useFavouriteDishes();

  type TestProps = CompositeNavigationProp<
    NavigationProp<HomeStackParamList>,
    NavigationProp<FavouritesStackParamList>
  >;

  const navigation = useNavigation<TestProps>();

  return (
    <Page>
      {favouriteDishes.map((dish) => (
        <FavouritesCard {...dish} />
      ))}
      <CartCard />
    </Page>
  );
};
