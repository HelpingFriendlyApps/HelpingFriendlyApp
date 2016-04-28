import React, { Image, StyleSheet, Text, View } from 'react-native';

export default class ImagesTab extends React.Component {
  render() {
    const data = this.props.data;
    const region = {
      latitude: data.latitude,
      longitude: data.longitude,
      latitudeDelta: .01,
      longitudeDelta: .01
    };
    const annotations = [{
      latitude: data.latitude,
      longitude: data.longitude,
      title: data.venue,
      subtitle: `${data.address}, ${data.city}, ${data.state}`
    }];

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <View style={styles.imagesContainer}>
          <Image
            source={{uri: this.props.data.photos}}
            style={styles.photo}
          />
        </View>
          <View style={styles.basicInfoContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.bold}>Show Time: </Text>
              <Text style={styles.bold}>Doors Open: </Text>
            </View>
            <View style={styles.locationContainer}>
              <Text style={styles.bold}>{data.showTime}</Text>
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
    paddingTop: 10,
  },
  photo: {
    width: 350,
    height: 200,
  },
  seatingChart: {
    width: 350,
    height: 320,
    marginTop: 20
  },
  venue: {
    fontSize: 30,
    letterSpacing: 1,
    color: 'darkslategrey',
    fontWeight: '500',
    paddingBottom: 20
  },
  bold: {
    fontWeight: '500',
    flexDirection: 'row',
    fontSize: 15,
    paddingRight: 5,
    color: 'darkslategrey'
  },
  basicInfoContainer: {
    flexDirection: 'row',
    paddingBottom: 40,
  },
});
