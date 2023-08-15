import { PressableProps, StyleProp, ViewStyle } from 'react-native';

export interface IIconProps {
  style?: StyleProp<ViewStyle>;
  width?: number;
  height?: number;
}

export interface ISelectOption {
  value: string | number | null;
  label: string;
}

export interface IButtonProps extends PressableProps {
  isOutlined?: boolean;
}
