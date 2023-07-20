import * as React from 'react';
import Svg, { Rect } from 'react-native-svg';

export const DisabledCheckIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Rect x="0.5" y="0.5" width="23" height="23" rx="1.5" fill="#FFFBFB" stroke="#E9E8F8" />
    </Svg>
  );
};
