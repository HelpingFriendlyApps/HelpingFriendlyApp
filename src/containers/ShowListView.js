import React, { StyleSheet, View } from 'react-native';
import ShowRow from '../components/ShowRow';
import ShowDetailView from './ShowDetailView';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ShowsListActions from '../actions/showsList';

const mapStateToProps = (state) => ({
  tour: state.tour
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ShowsListActions, dispatch);
}

export class ShowListView extends React.Component {
  constructor(props) {
    super(props);
    this.chooseShow = this.chooseShow.bind(this);
  }

  chooseShow(showID) {
    const venueID = this.props.tour.shows[showID].venueID;
    const showData = this.props.tour.shows[showID];
    const venueData = this.props.tour.venues[venueID];
    const showDate = showData.niceDate;
    const data = {
      venueData,
      showData
    };

    this.props.toRoute({
      name: showDate,
      component: ShowDetailView,
      data: data
    });

    this.props.selectShow(showID);
  }

  render() {
    return (
      <View style={styles.listView}>
        <ShowRow
          shows={this.props.tour.shows}
          chooseShow={this.chooseShow}
          venueData={this.props.tour.venues}
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

export default connect(mapStateToProps, mapDispatchToProps)(ShowListView);
