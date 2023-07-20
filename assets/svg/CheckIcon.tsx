import * as React from 'react';
import Svg, { Path, Rect, Defs, G, ClipPath } from 'react-native-svg';

export const CheckIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="2" fill="#F86060" />
      <G clip-path="url(#clip0_0_825)">
        <Path
          d="M7.91675 12L10.8334 14.9167L16.6667 9.08333"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_0_825">
          <Rect width="14" height="14" fill="white" transform="translate(5 5)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
