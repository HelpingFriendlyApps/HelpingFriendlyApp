import React, { Image, StyleSheet, Text, View } from 'react-native';

export default class DetailsTab extends React.Component {
  render() {
    const data = this.props.venueData;

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <View style={styles.imagesContainer}>
          <Image
            source={{uri: data.photos}}
            style={styles.photo}
          />
        </View>
          <View style={styles.basicInfoContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.bold}>Show Time: </Text>
              <Text style={styles.bold}>Doors Open: </Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.bold}>{data.showTime} {data.timeZone}</Text>
              <Text style={styles.bold}>{data.doorTime}</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imagesContainer: {
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: 335,
    height: 200,
  },
  venue: {
    fontSize: 30,
    letterSpacing: 1,
    color: 'darkslategrey',
    fontWeight: '500',
  },
  bold: {
    fontWeight: '600',
    flexDirection: 'row',
    fontSize: 15,
    paddingRight: 5,
    color: 'darkslategrey'
  },
  basicInfoContainer: {
    flexDirection: 'row',
  },
});
