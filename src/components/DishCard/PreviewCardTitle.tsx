import { FC } from 'react';
import { FlexRow } from '../layout';
import { Header } from '../typography';

type PreviewCardTitleProps = {
  title: string;
  currency: string;
  price: string;
};

export const PreviewCardTitle: FC<PreviewCardTitleProps> = ({ title, currency, price }) => {
  return (
    <FlexRow marginBottom={20} justifyContent="space-between">
      <Header text={title} />
      <Header text={`${currency}${price}`} />
    </FlexRow>
  );
};
