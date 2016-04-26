import React, { StyleSheet, View } from 'react-native';
import Counter from './Counter';
import ShowListView from './ShowListView';
import ShowDetailView from './ShowDetailView';

import Router from 'react-native-simple-router';

const firstRoute = {
  name: 'Summer 2016',
  component: ShowListView
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lemonchiffon'
  },
  header: {
    backgroundColor: 'mistyrose'
  },
});
