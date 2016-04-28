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
    const style = [
      styles.row,
      {backgroundColor: colors[rowID % colors.length]}
    ];

    return (
      <TouchableOpacity onPress={() => this.chooseShow(rowID)}>
        <View style={style}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>{show.slashDate}</Text>
          </View>
          <View style={styles.venueLocationContainer}>
            <Text style={styles.venue}>{show.venue} </Text>
            <Text style={styles.location}>{show.city}, {show.state}</Text>
          </View>
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

const colors = ['ivory', 'floralwhite'];

const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: 'row'
  },
  dateContainer: {
    // borderWidth: .5,
    width: 70
  },
  venueLocationContainer: {
    // borderWidth: .4
  },
  date: {
    textAlign: 'left',
    color: 'darkslategrey',
    fontSize: 20,
    fontWeight: '500'
  },
  venue: {
    fontSize: 20,
    color: 'darkslategrey',
    fontWeight: '500'
  },
  location: {
    color: 'darkslategrey',
  }
});
