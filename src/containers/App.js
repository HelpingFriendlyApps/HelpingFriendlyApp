import React, { StyleSheet, View } from 'react-native';
import Counter from './Counter';
import ShowListView from './ShowListView';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ShowListView />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lemonchiffon'
  }
});
