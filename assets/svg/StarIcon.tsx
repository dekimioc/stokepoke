import * as React from 'react';
import Svg, { Path, Rect, SvgProps, PathProps } from 'react-native-svg';

export const StarIcon: React.FC<SvgProps & PathProps> = ({ color, clipPath }) => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect x="0.5" y="0.500122" width="39" height="39" rx="3.5" fill={color} stroke={'#292838'} />
      <Path
        d="M20 10.0001L23.09 16.2601L30 17.2701L25 22.1401L26.18 29.0201L20 25.7701L13.82 29.0201L15 22.1401L10 17.2701L16.91 16.2601L20 10.0001Z"
        fill="white"
        stroke={clipPath}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
