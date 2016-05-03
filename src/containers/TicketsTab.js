import React, { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SetlistActions from '../actions/setlist';
import WebBrowser from '../components/WebBrowser';

const mapStateToProps = (state) => ({
  setlist: state.setlist
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SetlistActions, dispatch);
}

export default class TicketsTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WebBrowser
        data={this.props.data}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  button: {
    borderWidth: 1,
    height: 60,
    width: 200,
    borderRadius: 10,
    padding: 10,
    borderColor: 'darkslategrey',
  },
  fetchText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 15,
    color: 'darkslategrey',
  },
  numShows: {
    padding: 10,
    color: 'darkslategrey',
  },
  setlistText: {
    color: 'darkslategrey',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketsTab);
