import React, { MapView, ScrollView, StyleSheet, Text, View } from 'react-native';
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
      <View>
          <MapView
            style={styles.map}
            region={region}
            annotations={annotations}
          />
        <Separator />
        <View style={styles.bottomContainer}>
          <Text style={styles.whatToDo}>What to Do in {data.city}</Text>
          <ScrollView
            style={styles.accordion}
            bounces={false}
            scrollsToTop={false}
          >
            <Accordion
              sections={data.thingsToDo}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              useTouchableOpacity={true}
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: 230,
    alignItems: 'center'
  },
  bottomContainer: {
    paddingHorizontal: 20
  },
  whatToDo: {
    fontSize: 20,
    color: 'darkslategrey',
    fontWeight: '500',
    paddingBottom: 10,
  },
  accordion: {
    paddingLeft: 10,
    height: 240
  },
  activityName: {
    fontSize: 16,
    color: 'darkslategrey',
    padding: 10
  },
  activityDescription: {
    color: 'darkslategrey',
    marginLeft: 20
  },
});
