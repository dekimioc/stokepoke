import * as React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const DeleteIcon = () => {
  return (
    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <Rect x="0.5" y="0.500122" width="39" height="39" rx="3.5" stroke="#292838" />
      <Path d="M11 14.0001H13H29" stroke="#292838" stroke-linecap="round" stroke-linejoin="round" />
      <Path
        d="M27 14.0001V28.0001C27 28.5306 26.7893 29.0393 26.4142 29.4143C26.0391 29.7894 25.5304 30.0001 25 30.0001H15C14.4696 30.0001 13.9609 29.7894 13.5858 29.4143C13.2107 29.0393 13 28.5306 13 28.0001V14.0001M16 14.0001V12.0001C16 11.4697 16.2107 10.961 16.5858 10.5859C16.9609 10.2108 17.4696 10.0001 18 10.0001H22C22.5304 10.0001 23.0391 10.2108 23.4142 10.5859C23.7893 10.961 24 11.4697 24 12.0001V14.0001"
        stroke="#292838"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M18 19.0001V25.0001"
        stroke="#292838"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M22 19.0001V25.0001"
        stroke="#292838"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
