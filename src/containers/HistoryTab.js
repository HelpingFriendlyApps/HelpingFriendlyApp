import React, { Image, TouchableHighlight, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as SetlistActions from '../actions/setlist';

const mapStateToProps = (state) => ({
  setlist: state.setlist
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(SetlistActions, dispatch);
}

export class LocalTab extends React.Component {
  constructor(props) {
    super(props);

    console.log(props);
    this.fetchSetlist = this.fetchSetlist.bind(this);
  }

  fetchSetlist(apiDate) {
    const apiFriendlyDate = this.props.showData.mmddyy.slice(0,5);
    this.props.fetchSetlist(apiFriendlyDate);
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={this.fetchSetlist}>
          <Text>Click to load setlist from today's date</Text>
        </TouchableHighlight>
        <Text>There have been {this.props.setlist.showsOnDate} shows on this date</Text>
        <Text>Setlist: {this.props.setlist.setlist}</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalTab);
