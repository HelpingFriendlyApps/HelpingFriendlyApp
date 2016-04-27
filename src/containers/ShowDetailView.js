import React, { Image, StyleSheet, Text, View } from 'react-native';

export default class ShowDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <View style={styles.basicInfoContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.bold}>Show Time: </Text><Text>{data.showTime}</Text>
            <Text style={styles.bold}>Doors Open: </Text><Text>{data.doorTime}</Text>
            <Text style={styles.bold}>Capacity: </Text><Text>{data.capacity}</Text>
          </View>
          <View style={styles.locationContainer}>
            <Text style={styles.address}>{data.address}</Text>
            <Text style={styles.address}>{data.city}, {data.state}</Text>
          </View>
        </View>
        <Image
          source={{uri: data.photos}}
          style={styles.pic}
        />
        <Image
          source={{uri: data.seatingChart}}
          style={styles.pic}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center'
  },
  bold: {
    fontWeight: '500',
    flexDirection: 'row'
  },
  basicInfoContainer: {
    flexDirection: 'row',
    paddingBottom: 20,
    width: 300,
    justifyContent: 'space-between'
  },
  timeContainer: {
    // alignItems: 'stretch'
  },
  locationContainer: {
    // alignSelf: 'stretch',
  },
  address: {
    textAlign: 'right'
  },
  venue: {
    fontSize: 30,
    letterSpacing: 1,
    color: 'darkslategrey',
    fontWeight: '500',
    paddingBottom: 30,
    textAlign: 'center'
  },
  pic: {
    height: 200,
    width: 300,
  }
});
