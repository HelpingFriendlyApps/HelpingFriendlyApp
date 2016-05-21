import React from 'react-native';
import WebBrowser from '../components/WebBrowser';

export default class TicketsTab extends React.Component {
  render() {
    return (
      <WebBrowser
        data={this.props.data}
      />
    );
  }
}
