import React, { MapView, StyleSheet, Text, View } from 'react-native';

export default class MapTab extends React.Component {
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
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={region}
            annotations={annotations}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.topThree}>Top 3 Things to Do in {data.city}</Text>
          <Text>1. Collect underpants</Text>
          <Text>2. ?</Text>
          <Text>3. Profit</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // flexDirection: 'column',
    padding: 20
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
  mapContainer: {
    alignItems: 'center',
    paddingBottom: 40
  },
  map: {
    height: 200,
    width: 340,
    alignItems: 'center'
  },
  bottomContainer: {
  },
  topThree: {
    fontSize: 20,
    color: 'darkslategrey',
    fontWeight: '500',
    paddingBottom: 10
  }
});
