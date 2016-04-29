import React, { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    this.fetchSetlist = this.fetchSetlist.bind(this);
  }

  fetchSetlist(apiDate) {
    const apiFriendlyDate = this.props.showData.mmddyy.slice(0,5);
    this.props.fetchSetlist(apiFriendlyDate);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.fetchSetlist}>
            <View style={styles.button}>
              <Text style={styles.fetchText}>Tap to load a random setlist from {this.props.showData.niceDate}</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.numShows}>There have been {this.props.setlist.showsOnDate} shows on this date</Text>
          <Text style={styles.setlistText}>{this.props.setlist.setlist}</Text>
        </View>
      </ScrollView>
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

export default connect(mapStateToProps, mapDispatchToProps)(LocalTab);
