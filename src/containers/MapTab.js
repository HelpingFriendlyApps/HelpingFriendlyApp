import React, { MapView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Separator from '../components/Separator';
import MyText from '../components/MyText';

export default class MapTab extends React.Component {
  renderHeader(section) {
    return (
      <View>
        <MyText type={'activityName'}>{section.name}</MyText>
      </View>
    );
  }

  renderContent(content) {
    return (
      <View>
        <MyText type={'activityDescription'}>
          {content.description}
        </MyText>
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
      subtitle: `${data.address}, ${data.city}, ${data.state}`
    }];
    const thingsToDo = data.thingsToDo.forEach(activity => {
      annotations.push({
        latitude: activity.latitude,
        longitude: activity.longitude,
        title: activity.name,
        subtitle: `${activity.address}, ${activity.city}, ${activity.state}`
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
          <MyText type={'whatToDo'}>What to Do in {data.city}</MyText>
          <ScrollView
            style={styles.accordion}
            bounces={false}
            scrollsToTop={false}
          >
            <Accordion
              sections={data.thingsToDo}
              renderHeader={this.renderHeader}
              renderContent={this.renderContent}
              underlayColor={'transparent'}
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
    alignItems: 'center',
  },
  bottomContainer: {
    paddingHorizontal: 20
  },
  accordion: {
    paddingLeft: 10,
    height: 240
  },
});
