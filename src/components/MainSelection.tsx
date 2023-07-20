import { FlexColumn } from './layout';
import { BodyText, Header } from './typography';

type MainSelectionProps = {
  headerText: string;
  subheadingText?: string;
} & React.PropsWithChildren;

export const MainSelection: React.FC<MainSelectionProps> = ({
  headerText,
  subheadingText,
  children,
}) => {
  return (
    <FlexColumn gap={20}>
      <FlexColumn gap={10}>
        <Header text={headerText} />
        {subheadingText && <BodyText text={subheadingText} />}
      </FlexColumn>
      {children}
    </FlexColumn>
  );
};
