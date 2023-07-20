import { MainSelection } from '../MainSelection';
import { BaseOptions } from './BaseOptions';

export const Base = () => {
  return (
    <MainSelection headerText="Pick the Base">
      <BaseOptions />
    </MainSelection>
  );
};
