import { MainSelection } from '../MainSelection';
import { SauceOptions } from './SauceOptions';

export const Sauce = () => {
  return (
    <MainSelection headerText="Pick a Sauce">
      <SauceOptions />
    </MainSelection>
  );
};
