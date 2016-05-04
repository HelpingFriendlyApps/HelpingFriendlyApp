import React, { MapView, StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Separator from '../components/Separator';

export default class MapTab extends React.Component {
  renderHeader(section) {
    return (
      <View>
        <Text style={styles.activityName}>{section.name}</Text>
      </View>
    );
  }

  renderContent(section) {
    return (
      <View>
        <Text style={styles.activityDescription}>{section.description}</Text>
      </View>
    );
  }

  render() {
    const data = this.props.data.venueData;
    const region = {
      latitude: data.latitude,
      longitude: data.longitude,
      latitudeDelta: .1,
      longitudeDelta: .1
    };
    let annotations = [{
      latitude: data.latitude,
      longitude: data.longitude,
      title: data.venue,
      subtitle: `${data.address}, ${data.city}, ${data.state}`,
    }];
    const thingsToDo = data.thingsToDo.forEach(activity => {
      annotations.push({
        latitude: activity.latitude,
        longitude: activity.longitude,
        title: activity.name,
        subtitle: `${activity.address}, ${activity.city}, ${activity.state}`,
      })
    });

    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={region}
            annotations={annotations}
          />
        </View>
        <Separator />
        <View style={styles.bottomContainer}>
          <Text style={styles.topThree}>What to Do in {data.city}</Text>
          <View style={styles.accordion}>
            <Accordion
              sections={data.thingsToDo}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              useTouchableOpacity={true}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  mapContainer: {
    alignItems: 'center',
  },
  map: {
    height: 200,
    width: 340,
    alignItems: 'center'
  },
  topThree: {
    fontSize: 20,
    color: 'darkslategrey',
    fontWeight: '500',
    paddingBottom: 10,
  },
  accordion: {
    paddingLeft: 10
  },
  activityName: {
    fontSize: 16,
    // borderWidth: 1,
    color: 'darkslategrey',
    padding: 10
  },
  activityDescription: {
    color: 'darkslategrey',
    // borderWidth: 1,
    // padding: 10,
    marginLeft: 20
  },
});
