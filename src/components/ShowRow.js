import React, { Image, ListView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ShowDetailView from '../containers/ShowDetailView';
import MyText from './MyText';

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
    const venueID = show.venueID;

    return (
      <TouchableOpacity onPress={() => this.chooseShow(rowID)}>
        <Image
          source={{uri: this.props.venueData[venueID].photos[0]}}
          style={styles.backgroundPhoto}
        >
          <View style={styles.row}>
            <View style={styles.dateContainer}>
              <MyText type={'showRowDate'}>{show.slashDate}</MyText>
            </View>
            <View style={styles.venueLocationContainer}>
              <MyText type={'showRowVenue'}>{show.venue} </MyText>
              <MyText type={'showRowLocation'}>{show.city}, {show.state}</MyText>
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

const styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: 'row',
    height: 120,
  },
  backgroundPhoto: {
    flex: 1,
    marginTop: 3,
    marginBottom: 3,
  },
  dateContainer: {
    width: 60,
  },
});
