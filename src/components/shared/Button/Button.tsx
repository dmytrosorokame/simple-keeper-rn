import React, { PropsWithChildren, useState } from 'react';
import { Pressable, Text } from 'react-native';

import { IButtonProps } from '../../../types/common';

import { getStyles } from './styles';

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({ children, disabled, isOutlined, ...rest }) => {
  const [isPressed, setIsPressed] = useState(false);

  const styles = getStyles({
    isPressed,
    isOutlined: !!isOutlined,
    isDisabled: !!disabled,
  });

  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      disabled={disabled}
      {...rest}
    >
      <Text style={styles.label}>{children}</Text>
    </Pressable>
  );
};

export default Button;
