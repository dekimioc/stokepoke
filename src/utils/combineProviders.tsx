import { ComponentProps, ComponentType, FC } from 'react';
import {
  BaseProvider,
  BowlProvider,
  SauceProvider,
  SizeProvider,
  IngredientsProvider,
  ExtraIngredientsProvider,
  DishProvider,
  CartProvider,
  FavouriteDishProvider,
} from '../context';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../hooks';
import { FormikProvider } from 'formik';

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
  [FormikProvider],
  [BowlProvider],
  [SizeProvider],
  [BaseProvider],
  [SauceProvider],
  [IngredientsProvider],
  [ExtraIngredientsProvider],
  [DishProvider],
  [CartProvider],
  [FavouriteDishProvider],
]);
