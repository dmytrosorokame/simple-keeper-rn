import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  label: TextStyle;
}

interface IProps {
  isPressed: boolean;
  isDisabled: boolean;
  isOutlined: boolean;
}

export const getStyles = ({ isPressed, isDisabled, isOutlined }: IProps): IStyles => {
  const backgroundColor = (isOutlined && !isPressed) || (isPressed && !isOutlined) ? '#fff' : '#000';
  const labelColor = (isOutlined && !isPressed) || (isPressed && !isOutlined) ? '#000' : '#fff';

  return StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 40,
      backgroundColor: isDisabled ? '#ccc' : backgroundColor,
      borderWidth: 1,
      borderColor: isDisabled ? '#ccc' : '#000',
    },

    label: {
      color: isDisabled ? '#000' : labelColor,
    },
  });
};
