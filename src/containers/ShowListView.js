import React, { StyleSheet, View } from 'react-native';
import ShowRow from '../components/ShowRow';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  tour: state.tour
})

export class ShowListView extends React.Component {
  render() {
    return (
      <ShowRow shows={this.props.tour.shows} />
    );
  }
}

export default connect(mapStateToProps)(ShowListView);
