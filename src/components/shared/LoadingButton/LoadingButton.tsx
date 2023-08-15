import React, { PropsWithChildren } from 'react';
import { ActivityIndicator } from 'react-native';

import { IButtonProps } from '../../../types/common';
import Button from '../Button';

interface ILoadingButtonProps extends IButtonProps {
  isLoading: boolean;
}

const LoadingButton: React.FC<PropsWithChildren<ILoadingButtonProps>> = ({ children, isLoading, ...rest }) => (
  <Button {...rest}>{isLoading ? <ActivityIndicator size="small" color="#fff" /> : children}</Button>
);

export default LoadingButton;
