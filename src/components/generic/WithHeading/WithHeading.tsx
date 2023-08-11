import { PropsWithChildren } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import Heading from '../../shared/Heading';

interface IWithHeadingProps {
  style?: StyleProp<ViewStyle>;
}

const WithHeading: React.FC<PropsWithChildren<IWithHeadingProps>> = ({ children, style }) => (
  <View style={style}>
    <Heading />

    {children}
  </View>
);

export default WithHeading;
