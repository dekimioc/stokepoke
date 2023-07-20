import { PokeBowlOptions } from './PokeBowlOptions';
import { MainSelection } from '../MainSelection';
import { Box } from '../layout';

export const PokeBowl = () => {
  return (
    <Box marginBottom={30}>
      <MainSelection
        headerText="Make your own poke bowl"
        subheadingText="Select the type of bowl your&#39;d like, the size, add the base, sauce and all the added ingredients. We&#39;ll take care of the rest!">
        <PokeBowlOptions />
      </MainSelection>
    </Box>
  );
};
