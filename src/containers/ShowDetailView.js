import React, { Image, StyleSheet, Text, View } from 'react-native';

export default class ShowDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Name: {this.props.data.name}</Text>
        <Text>Address: {this.props.data.address}</Text>
        <Text>Capacity: {this.props.data.capacity}</Text>
        <Text>Show Time: {this.props.data.showTime}</Text>
        <Text>Door Time: {this.props.data.doorTime}</Text>
        <Image
          source={{uri: this.props.data.photos}}
          style={styles.pic}
        />
        <Image
          source={{uri: this.props.data.seatingChart}}
          style={styles.pic}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pic: {
    height: 200,
    width: 300,
    // padding: 50
  }
});
