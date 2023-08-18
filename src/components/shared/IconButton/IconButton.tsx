import React, { PropsWithChildren } from 'react';
import { Pressable, PressableProps } from 'react-native';

interface IIconButtonProps extends PressableProps {}

const IconButton: React.FC<PropsWithChildren<IIconButtonProps>> = ({ children, ...rest }) => {
  return <Pressable {...rest}>{children}</Pressable>;
};

export default IconButton;
