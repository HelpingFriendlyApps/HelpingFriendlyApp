import React, { Text, StyleSheet } from 'react-native';

export default class MyText extends React.Component {
  render() {
    let { type } = this.props;

    return (
      <Text style={[styles.allText, styles[type]]}>
        {this.props.children}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  allText: {
    fontFamily: 'Avenir',
    color: 'darkslategrey',
  },
  showRowDate: {
    textAlign: 'left',
    color: 'white',
    fontSize: 20,
    fontWeight: '800',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 2},
  },
  showRowVenue: {
    fontSize: 20,
    color: 'white',
    fontWeight: '800',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 2},
  },
  showRowLocation: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 1},
  },
  venue: {
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
  timeBoxText: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 10,
    color: 'darkslategrey',
  },
  timeBoxTime: {
    fontSize: 14,
    color: 'darkslategrey',
  },
  whatToDo: {
    fontSize: 20,
    fontWeight: '500',
    paddingBottom: 10,
  },
  activityName: {
    fontSize: 16,
    padding: 10,
  },
  activityDescription: {
    marginLeft: 20,
  }
})