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
    // flex: 1,
    borderWidth: 1,
    borderColor: 'darkslategrey',
    alignItems: 'center',
    // margin: 10,
    padding: 20,
    // borderRadius: 5,
    width: 90
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 10,
    color: 'darkslategrey',
    // textDecorationLine: 'underline',
  },
  time: {
    fontSize: 12,
    color: 'darkslategrey',
  }
});
