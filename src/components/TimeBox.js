import React, { Text, StyleSheet, View } from 'react-native';

export default class TimeBox extends React.Component {
  render() {
    return (
      <View style={styles.timeBoxContainer}>
        <Text style={styles.text}>{this.props.text}</Text>
        <Text style={styles.time}>{this.props.time}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeBoxContainer: {
    borderWidth: 1,
    borderColor: 'darkslategrey',
    alignItems: 'center',
    padding: 20,
    width: 90
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 10,
    color: 'darkslategrey',
  },
  time: {
    fontSize: 12,
    color: 'darkslategrey',
  }
});
