import React, { Text, StyleSheet, View } from 'react-native';
import MyText from './MyText';

export default class TimeBox extends React.Component {
  render() {
    return (
      <View style={styles.timeBoxContainer}>
        <MyText type={'timeBoxText'}>{this.props.text}</MyText>
        <MyText type={'timeBoxTime'}>{this.props.time}</MyText>
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
});
