import React, { ListView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import ShowListView from '../containers/ShowListView';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Clicked: {this.props.counter} times</Text>

        <TouchableHighlight onPress={this.props.increment}>
          <Text style={styles.text}>+</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.decrement}>
          <Text style={styles.text}>-</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lemonchiffon'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    // lineHeight: 80,
    margin: 10,
    color: 'midnightblue'
  }
});
