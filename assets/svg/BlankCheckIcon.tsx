import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

export const BlankCheckIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect width="24" height="24" rx="2" fill="#FFFBFB" />
      <Rect x="0.5" y="0.5" width="23" height="23" rx="1.5" stroke="#F86060" stroke-opacity="0.3" />
    </Svg>
  );
};
