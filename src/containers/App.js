import React, { StyleSheet } from 'react-native';
import ShowListView from './ShowListView';
import ShowDetailView from './ShowDetailView';
import Router from 'react-native-simple-router';
import BackButton from '../components/BackButton';

const firstRoute = {
  name: 'Summer 2016',
  component: ShowListView
};

export default class App extends React.Component {
  render() {
    return (
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        backButtonComponent={BackButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkslategrey'
  },
});
