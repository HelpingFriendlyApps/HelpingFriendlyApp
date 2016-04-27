import React, { ListView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import ShowDetailView from '../containers/ShowDetailView';

export default class ShowRow extends React.Component {
  constructor(props) {
    super(props);

    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      showsDataSource: ds.cloneWithRows(this.props.shows)
    };

    this.chooseShow = this.chooseShow.bind(this);
    this.renderShow = this.renderShow.bind(this);
  }

  chooseShow(rowID) {
    this.props.chooseShow(rowID);
  }

  renderShow(show, sectionID, rowID) {
    return (
      <TouchableOpacity onPress={() => this.chooseShow(rowID)}>
        <View style={styles.row}>
          <Text style={styles.date}>{show.date}</Text>
          <Text style={styles.venue}>{show.venue} </Text>
          <Text style={styles.location}>{show.city}, {show.state}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
        <ListView
          style={styles.showsContainer}
          dataSource={this.state.showsDataSource}
          renderRow={this.renderShow}
        />
    );
  }
}

const styles = StyleSheet.create({
  showsContainer: {
    // marginTop: 50,
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue'
  },
  showText: {
    fontSize: 20,
    paddingBottom: 10
  },
  row: {
    borderWidth: 1,
    padding: 10,
    borderColor: 'darkslategrey'
  },
  date: {
    textAlign: 'left',
    color: 'rebeccapurple',
    fontSize: 20,
  },
  venue: {
    fontSize: 20,
  },
});
