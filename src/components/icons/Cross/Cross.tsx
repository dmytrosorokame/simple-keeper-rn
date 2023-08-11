import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { IIconProps } from '../../../types/common';

const Cross: React.FC<IIconProps> = ({ style, width, height }) => (
  <Svg style={style} width={width} height={height}>
    <Path
      d="M8.46399 15.535L15.536 8.465M8.46399 8.465L15.536 15.535"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);

export default Cross;
