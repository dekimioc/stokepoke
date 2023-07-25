import * as React from 'react';
import Svg, { G, Path, Defs, Rect, ClipPath } from 'react-native-svg';

export const ArrowRight = () => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <G clip-path="url(#clip0_0_122)">
        <Path d="M6 4L10 8L6 12" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
      </G>
      <Defs>
        <ClipPath id="clip0_0_122">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
