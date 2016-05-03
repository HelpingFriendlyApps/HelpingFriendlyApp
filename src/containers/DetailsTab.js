import React, { Image, StyleSheet, Text, View } from 'react-native';
import Carousel from 'react-native-carousel';
import TimeBox from '../components/TimeBox';

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
        <View style={styles.carouselContainer}>
          <Carousel
            width={340}
            indicatorSize={20}
            indicatorSpace={15}
            animate={false}
            indicatorOffset={5}
            indicatorColor={'darkseagreen'}
            inactiveIndicatorColor={'ivory'}
          >
            {photoCollection}
          </Carousel>
        </View>
          <View style={styles.basicInfoContainer}>
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
    // alignItems: 'center'
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
    fontWeight: '600',
    textAlign: 'center'
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
    justifyContent: 'space-between'
  },
});
