import React, { Image, MapView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TabBarActions from '../actions/tabBar';
import MapTab from './MapTab';
import DetailsTab from './DetailsTab';
import TicketsTab from './TicketsTab';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Icon.TabBarItemIOS
            iconName={'info'}
            title={'Info'}
            onPress={() => this.changeTab('details')}
            selected={this.props.tour.selectedTab === 'details'}
          >
            <DetailsTab
              data={this.props.data}
            />
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName={'map-marker'}
            title={'Map'}
            onPress={() => this.changeTab('map')}
            selected={this.props.tour.selectedTab === 'map'}
          >
            <MapTab
              data={this.props.data}
            />
          </Icon.TabBarItemIOS>

          <Icon.TabBarItemIOS
            iconName={'ticket'}
            title={'Tickets'}
            onPress={() => this.changeTab('tickets')}
            selected={this.props.tour.selectedTab === 'tickets'}
          >
            <TicketsTab
              data={this.props.data.showData}
            />
          </Icon.TabBarItemIOS>
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
