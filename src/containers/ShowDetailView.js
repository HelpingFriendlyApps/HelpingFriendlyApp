import React, { Image, MapView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TabBarActions from '../actions/tabBar';
import MapTab from './MapTab';
import DetailsTab from './DetailsTab';
import TicketsTab from './TicketsTab';

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
            onPress={() => this.changeTab('details')}
            selected={this.props.tour.selectedTab === 'details'}
          >
            <DetailsTab
              data={this.props.data}
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="favorites"
            onPress={() => this.changeTab('map')}
            selected={this.props.tour.selectedTab === 'map'}
          >
            <MapTab
              data={this.props.data}
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="contacts"
            onPress={() => this.changeTab('tickets')}
            selected={this.props.tour.selectedTab === 'tickets'}
          >
            <TicketsTab
              data={this.props.data.showData}
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
