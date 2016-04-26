import React, { StyleSheet, View } from 'react-native';
import ShowRow from '../components/ShowRow';
import ShowDetailView from './ShowDetailView';

import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  tour: state.tour
})

export class ShowListView extends React.Component {
  chooseShow(rowID) {
    this.props.toRoute({
      name: 'Show Details',
      component: ShowDetailView
    })
  }

  constructor(props) {
    super(props);

    this.chooseShow = this.chooseShow.bind(this);
  }

  render() {
    return (
      <ShowRow
        shows={this.props.tour.shows}
        chooseShow={this.chooseShow}
      />
    );
  }
}

export default connect(mapStateToProps)(ShowListView);
