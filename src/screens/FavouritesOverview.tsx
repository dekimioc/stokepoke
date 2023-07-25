import { EmptyMessage, FavouritesCard, Header, Page } from '../components';
import { useFavouriteDishes } from '../hooks/useFavouriteDishes';
import { FlatList } from 'react-native';

export const FavouritesOverview = () => {
  const { favouriteDishes } = useFavouriteDishes();

  return (
    <Page>
      <Header text="Favourites" marginBottom={20} />
      <FlatList
        scrollEnabled={false}
        keyExtractor={(item, i) => `${item.bowl.id}-${i}`}
        data={favouriteDishes}
        renderItem={({ item }) => <FavouritesCard {...item} />}
        ListEmptyComponent={() => <EmptyMessage message={'No favourite items selected.'} />}
      />
    </Page>
  );
};
