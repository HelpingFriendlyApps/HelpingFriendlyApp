import React, { WebView } from 'react-native';

export default class WebBrowser extends React.Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://m.cashortrade.org'}}
        style={{height: 200}}
      />
    );
  }
}
