import React, { PropsWithChildren } from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

interface ITextButtonProps extends TextProps {}

const TextButton: React.FC<PropsWithChildren<ITextButtonProps>> = ({ children, ...rest }) => (
  <Text {...rest} style={[styles.text, rest.style]}>
    {children}
  </Text>
);

export default TextButton;
