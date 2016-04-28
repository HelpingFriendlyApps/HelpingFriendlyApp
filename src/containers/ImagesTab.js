import React, { Image, StyleSheet, Text, View } from 'react-native';

export default class ImagesTab extends React.Component {
  render() {
    return (
      <View style={styles.imagesContainer}>
        <Image
          source={{uri: this.props.data.photos}}
          style={styles.photo}
        />
        <Image
          source={{uri: this.props.data.seatingChart}}
          style={styles.photo}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imagesContainer: {
    alignItems: 'center',
    paddingTop: 10,
  },
  photo: {
    width: 350,
    height: 200,
  }
});
