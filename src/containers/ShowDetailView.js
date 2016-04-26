import React, { Text, View } from 'react-native';

export default class ShowDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>some show details here</Text>
        <Text>venue: {this.props.data.venue}</Text>
      </View>
    );
  }
}
