import { FlatList } from 'react-native-gesture-handler';
import { Header, LocationCard, Page } from '../components';

const data = [
  {
    id: 1,
    town: 'Los Angeles',
    address: '3705 Felosa Drive',
  },
  {
    id: 2,
    town: 'Los Angeles',
    address: '260 Sumner Street',
  },
  {
    id: 3,
    town: 'Oakland',
    address: '4954 Thompson Drive',
  },
  {
    id: 4,
    town: 'Los Angeles',
    address: '1819 Clifford Street',
  },
];

export const Locations = () => {
  return (
    <Page>
      <Header text="Our locations" marginBottom={20} />
      <FlatList
        scrollEnabled={false}
        data={data}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => <LocationCard town={item.town} address={item.address} />}
      />
    </Page>
  );
};
