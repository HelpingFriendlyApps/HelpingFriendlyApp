import React, { MapView, StyleSheet, Text, View } from 'react-native';

export default class MapTab extends React.Component {
  render() {
    const data = this.props.venueData;
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
