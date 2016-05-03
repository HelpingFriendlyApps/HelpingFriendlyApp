import React, { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BackButton extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          name='chevron-left'
          size={20}
          style={styles.back}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    marginLeft: 20,
    width: 30
  },
  back: {
    color: 'white',
  }
};
