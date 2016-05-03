import React, { WebView } from 'react-native';

export default class WebBrowser extends React.Component {
  render() {
    const data = this.props.data;

    const city = data.city.split(' ').join('-');
    const venue = data.cotVenue
      ? data.cotVenue
      : data.venue.split(' ').join('-')

    const cotURL = `http://m.cashortrade.org/phish-tickets/${data.cotID}/${data.yyyymmdd}-${venue}-${city}-${data.state}`;

    return (
      <WebView
        source={{uri: cotURL}}
        startInLoadingState={true}
      />
    );
  }
}
