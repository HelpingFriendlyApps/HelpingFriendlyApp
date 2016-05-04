import React, { Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-carousel';
import TimeBox from '../components/TimeBox';
import Separator from '../components/Separator';

export default class DetailsTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data.venueData;

    const photoCollection = (
      data.photos.map(photo =>
        <Image
          source={{uri: photo}}
          style={styles.photo}
          key={data.photos.indexOf(photo)}
        />
      )
    );

    photoCollection.push(
      <Image
        source={{uri: data.seatingChart}}
        style={styles.photo}
        key={photoCollection.length}
       />
     );

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <Separator />
        <View style={styles.carouselContainer}>
          <Carousel
            indicatorSize={20}
            indicatorSpace={15}
            animate={false}
            indicatorOffset={5}
            indicatorColor={'darkslategrey'}
            inactiveIndicatorColor={'ivory'}
          >
            {photoCollection}
          </Carousel>
        <Separator />
        </View>
          <View style={styles.timesContainer}>
            <TimeBox
              text={'Lot'}
              time={data.lotTime}
            />
            <TimeBox
              text={'Doors'}
              time={data.doorTime}
            />
            <TimeBox
              text={'Show'}
              time={data.showTime}
            />
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
    marginBottom: 20
  },
  photo: {
    width: 400,
    height: 200,
  },
  venue: {
    fontSize: 30,
    letterSpacing: 1,
    color: 'darkslategrey',
    fontWeight: '600',
    textAlign: 'center'
  },
  timesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});
