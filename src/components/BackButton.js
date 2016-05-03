import React, { Text } from 'react-native';

export default class BackButton extends React.Component {
  render() {
    return (
      <Text style={styles.back}>
        {'<'}
      </Text>
    );
  }
}

const styles = {
  back: {
    fontSize: 25,
    paddingLeft: 10,
    color: 'white',
  }
};
