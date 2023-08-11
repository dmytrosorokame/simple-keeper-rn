import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  inputContainer: StyleProp<ViewStyle>;
  input: StyleProp<TextStyle>;
  crossButton: StyleProp<ViewStyle>;
  eyeButton: StyleProp<ViewStyle>;
  errorText: StyleProp<TextStyle>;
}

interface IProps {
  isError: boolean;
}

export const getStyles = ({ isError }: IProps): IStyles => {
  return StyleSheet.create({
    inputContainer: {
      position: 'relative',
      paddingHorizontal: 12,
      height: 40,
      borderWidth: 2,
      borderColor: !isError ? 'black' : 'red',
    },
    input: {
      width: '100%',
      flex: 1,
    },
    crossButton: { position: 'absolute', right: 12, top: 5, width: 24, height: 24 },
    eyeButton: { position: 'absolute', right: 12, top: 7, width: 24, height: 24 },
    errorText: { color: 'red', fontSize: 12, marginTop: 4 },
  });
};
