import { Text, View } from 'react-native';

import { styles } from './styles';

const Heading: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>simple.keeper</Text>
    <Text style={styles.subtitle}>just keep.nothing more</Text>
  </View>
);

export default Heading;
