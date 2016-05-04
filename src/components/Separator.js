import React, { StyleSheet, View } from 'react-native';

export default class Separator extends React.Component {
  render() {
    return (
      <View style={styles.separator}></View>
    )
  }
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: .5,
    opacity: .5,
    borderColor: '#bfce9e',
    margin: 20
  }
});
