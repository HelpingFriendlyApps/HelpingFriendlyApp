import React, { Image, MapView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TabBarActions from '../actions/tabBar';
import MapTab from './MapTab';
import DetailsTab from './DetailsTab';
import HistoryTab from './HistoryTab';

const mapStateToProps = (state) => ({
  tour: state.tour
})

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(TabBarActions, dispatch);
}

export class ShowDetailView extends React.Component {
  constructor(props) {
    super(props);
  }

  changeTab(tappedTab) {
    if (this.props.tour.selectedTab !== tappedTab) {
      this.props.changeTab(tappedTab);
    }
  }

  render() {
    return (
      <View style={styles.pageContainer}>

        <TabBarIOS
          tintColor="darkseagreen"
          barTintColor="ivory"
          style={styles.tabBar}
          selectedTab={this.props.tour.selectedTab}
        >
          <TabBarIOS.Item
            systemIcon="history"
            onPress={() => this.changeTab('map')}
            selected={this.props.tour.selectedTab === 'map'}
          >
            <DetailsTab
              venueData={this.props.data}
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="favorites"
            onPress={() => this.changeTab('images')}
            selected={this.props.tour.selectedTab === 'images'}
          >
            <MapTab
              venueData={this.props.data}
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="contacts"
            onPress={() => this.changeTab('contacts')}
            selected={this.props.tour.selectedTab === 'contacts'}
          >
            <HistoryTab
              showID={this.props.tour.selectedShowID}
              showData={this.props.tour.shows[this.props.tour.selectedShowID]}
            />
          </TabBarIOS.Item>
        </TabBarIOS>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: 'ivory',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowDetailView);
