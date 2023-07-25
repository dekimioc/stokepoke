import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';

export const HamburgerIcon = () => {
  return (
    <Svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <G id="menu">
        <Path
          id="Vector"
          d="M4.5 18H31.5"
          stroke="#F86060"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_2"
          d="M4.5 9H31.5"
          stroke="#F86060"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          id="Vector_3"
          d="M4.5 27H31.5"
          stroke="#F86060"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    </Svg>
  );
};
