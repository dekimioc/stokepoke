import { FC } from 'react';
import { FlexRow } from './layout';
import { Header } from './typography';

type CardTitleProps = {
  title: string;
  currency: string;
  price: string;
};

export const CardTitle: FC<CardTitleProps> = ({ title, currency, price }) => {
  return (
    <FlexRow marginBottom={20} justifyContent="space-between">
      <Header text={title} />
      <Header text={`${currency}${price}`} />
    </FlexRow>
  );
};
