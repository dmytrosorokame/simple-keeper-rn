import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: 'black',
  },
  arrowDown: {
    transform: [
      {
        rotate: '180deg',
      },
    ],
  },
  optionsContainer: {
    height: 40,
    borderWidth: 2,
    borderTopWidth: 0,
    borderColor: 'black',
    backgroundColor: '#fff',
  },
  option: { height: 40, paddingHorizontal: 12, justifyContent: 'center' },
});
