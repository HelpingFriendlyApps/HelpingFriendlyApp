import React, { Image, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import Carousel from 'react-native-carousel';
import TimeBox from '../components/TimeBox';
import WebBrowser from '../components/WebBrowser';

export default class DetailsTab extends React.Component {
  constructor(props) {
    super(props);
    this.displayBrowser = this.displayBrowser.bind(this);
  }

  displayBrowser() {
    this.props.toRoute({
      name: 'Cash or Trade',
      component: WebBrowser,
      data: this.props.data.showData
    });
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
        <View style={styles.cotButtonContainer}>
          <TouchableOpacity onPress={this.displayBrowser}>
            <View style={styles.cotButton}>
              <Text>Cash or Trade</Text>
            </View>
          </TouchableOpacity>
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
  cotButtonContainer: {
    alignItems: 'center',
    margin: 40
  },
  cotButton: {
    height: 60,
    width: 160,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: 'darkslategrey',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
