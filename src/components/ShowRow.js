import React, { Image, ListView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
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
    // const style = [
    //   styles.row,
    //   {backgroundColor: colors[rowID % colors.length]}
    // ];

    const venueID = show.venueID;

    return (
      <TouchableOpacity onPress={() => this.chooseShow(rowID)}>
        <Image
          source={{uri: this.props.venueData[venueID].photos[0]}}
          style={styles.backgroundPhoto}
        >
          <View style={styles.row}>
            <View style={styles.dateContainer}>
              <Text style={styles.date}>{show.slashDate}</Text>
            </View>
            <View style={styles.venueLocationContainer}>
              <Text style={styles.venue}>{show.venue} </Text>
              <Text style={styles.location}>{show.city}, {show.state}</Text>
            </View>
          </View>
        </Image>
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

// const colors = ['ivory', 'floralwhite'];

const styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: 'row',
    height: 120
  },
  backgroundPhoto: {
    flex: 1,
    marginTop: 3,
    marginBottom: 3,
  },
  dateContainer: {
    width: 60
  },
  date: {
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 1}
  },
  venue: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 1}
  },
  location: {
    fontSize: 16,
    color: 'white',
    fontWeight: '400',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 1}
  }
});
