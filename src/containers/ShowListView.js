import React, { StyleSheet, View } from 'react-native';
import ShowRow from '../components/ShowRow';
import ShowDetailView from './ShowDetailView';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  tour: state.tour
})

export class ShowListView extends React.Component {
  constructor(props) {
    super(props);

    this.chooseShow = this.chooseShow.bind(this);
  }

  chooseShow(rowID) {
    const venueID = this.props.tour.shows[rowID].venueID;

    this.props.toRoute({
      name: 'Show Details',
      component: ShowDetailView,
      data: this.props.tour.venues[venueID]
    })
  }

  render() {
    return (
      <View style={styles.listView}>
        <ShowRow
          shows={this.props.tour.shows}
          chooseShow={this.chooseShow}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    backgroundColor: 'ivory'
  }
});

export default connect(mapStateToProps)(ShowListView);
