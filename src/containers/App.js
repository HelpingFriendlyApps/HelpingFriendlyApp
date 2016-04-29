import React, { StyleSheet, View } from 'react-native';
import Counter from './Counter';
import ShowListView from './ShowListView';
import ShowDetailView from './ShowDetailView';
import Router from 'react-native-simple-router';
import BackButton from '../components/BackButton';

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
        backButtonComponent={BackButton}
        backButtonProps={{previousScreen: "Summer 2016"}}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkseagreen'
  },
});
