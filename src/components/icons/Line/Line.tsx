import React from 'react';
import { Path, Svg } from 'react-native-svg';

import { IIconProps } from '../../../types/common';

const Line: React.FC<IIconProps> = ({ style, width, height }) => (
  <Svg style={style} width={width} height={height}>
    <Path d="M0 1L15 1" stroke="black" />
  </Svg>
);

export default Line;
