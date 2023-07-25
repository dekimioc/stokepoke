import { FC } from 'react';
import { Box, FlexColumn, FlexRow } from './layout';
import { BodyText, Header } from './typography';
import { PinIcon } from '../../assets/svg';

type LocationCardProps = {
  town: string;
  address: string;
};

export const LocationCard: FC<LocationCardProps> = ({ town, address }) => {
  return (
    <Box marginBottom={15}>
      <FlexColumn gap={10}>
        <Header text={town} />
        <FlexRow gap={10}>
          <PinIcon />
          <BodyText text={address} />
        </FlexRow>
      </FlexColumn>
    </Box>
  );
};
