import { FC } from 'react';
import { BodyText } from './typography';

type EmptyMessageProps = {
  message: string;
};

export const EmptyMessage: FC<EmptyMessageProps> = ({ message }) => {
  return <BodyText text={message} />;
};
