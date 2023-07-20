import { ComponentProps, ComponentType, FC } from 'react';
import {
  BaseProvider,
  BowlProvider,
  SauceProvider,
  SizeProvider,
  IngredientsProvider,
} from '../context';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks';

type Providers = [ComponentType<any>, ComponentProps<any>?][];

const combineProviders = (providers: Providers): FC<React.PropsWithChildren> =>
  providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) => (
        <AccumulatedProviders>
          <Provider {...props}>
            <>{children}</>
          </Provider>
        </AccumulatedProviders>
      ),
    ({ children }) => <>{children}</>
  );

const { theme } = useTheme();

export const AllProviders = combineProviders([
  [ThemeProvider, { theme }],
  [BowlProvider],
  [SizeProvider],
  [BaseProvider],
  [SauceProvider],
  [IngredientsProvider],
]);
