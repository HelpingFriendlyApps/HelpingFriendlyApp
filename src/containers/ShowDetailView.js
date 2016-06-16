import React, { StyleSheet, TabBarIOS, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TabBarActions from '../actions/tabBar';
import DetailsTab from './DetailsTab';
import MapTab from './MapTab';
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

  componentWillUnmount() {
    if (this.props.tour.selectedTab !== 'Details') {
      this.props.resetSelectedTab();
    }
  }

  changeTab(tappedTab) {
    if (this.props.tour.selectedTab !== tappedTab) {
      this.props.changeTab(tappedTab);
    }
  }

  renderTabBarItems() {
    const tabsData = [
      {
        title: 'Details',
        iconName: 'info',
        component: DetailsTab
      },
      {
        title: 'Map',
        iconName: 'map-marker',
        component: MapTab
      },
      {
        title: 'Tickets',
        iconName: 'ticket',
        component: TicketsTab
      }
    ];

    const tabs = tabsData.map(tab => {
      return (
        <Icon.TabBarItemIOS
          iconName={tab.iconName}
          title={tab.title}
          onPress={() => this.changeTab(tab.title)}
          selected={this.props.tour.selectedTab === tab.title}
          key={tab.title}
        >
          {React.createElement(tab.component, {data: this.props.data})}
        </Icon.TabBarItemIOS>
      )
    })

    return tabs;
  }

  render() {
    return (
      <View style={styles.pageContainer}>
        <TabBarIOS
          tintColor="darkslategrey"
          barTintColor="ivory"
          style={styles.tabBar}
          selectedTab={this.props.tour.selectedTab}
        >
          {this.renderTabBarItems()}
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
