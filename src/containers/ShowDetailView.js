import React, { Image, StyleSheet, Text, View } from 'react-native';

export default class ShowDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = this.props.data;

    return (
      <View style={styles.container}>
        <Text style={styles.venue}>{data.venue}</Text>
        <Image
          source={{uri: data.photos}}
          style={styles.pic}
        />
        <Text>{data.address}, {data.city}, {data.state}</Text>
        <Text>Capacity: {data.capacity}</Text>
        <Text>Show Time: {data.showTime}</Text>
        <Text>Door Time: {data.doorTime}</Text>
        <Image
          source={{uri: data.seatingChart}}
          style={styles.pic}
          resizeMode={'contain'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  venue: {
    fontSize: 30,
    letterSpacing: 1,
  },
  pic: {
    height: 200,
    width: 300,
  }
});
