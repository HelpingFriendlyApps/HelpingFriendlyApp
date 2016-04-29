import React, { Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-carousel';

export default class DetailsTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.venueData;

    const photoCollection = (
      data.photos.map(photo =>
        <Image
          source={{uri: photo}}
          style={styles.photo}
          key={data.photos.indexOf(photo)}
        />
      )
    );

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <View style={styles.carouselContainer}>
          <Carousel
            width={340}
            indicatorSize={30}
            animate={false}
            indicatorOffset={0}
            indicatorColor={'darkseagreen'}
            inactiveIndicatorColor={'ivory'}
          >
            {photoCollection}
            <Image
              source={{uri: data.seatingChart}}
              style={styles.photo}
            />
          </Carousel>
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
  carouselContainer: {
    // alignItems: 'center',
    marginTop: 20,
    marginBottom: 20
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
