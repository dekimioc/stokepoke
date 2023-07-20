import { MainSelection } from '../MainSelection';
import { SizeOptions } from './SizeOptions';

export const Size = () => {
  return (
    <MainSelection headerText="Pick a size">
      <SizeOptions />
    </MainSelection>
  );
};
