import React, { Image, MapView, StyleSheet, TabBarIOS, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TabBarActions from '../actions/tabBar';
import MapTab from './MapTab';

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

  renderTabs() {
    return (
      <View style={styles.tabItems}>
        <Text style={styles.tabText}>This is the {this.props.tour.selectedTab} tab</Text>
      </View>
    );
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
            onPress={() => this.changeTab('history')}
            selected={this.props.tour.selectedTab === 'history'}
          >
            <MapTab
              data={this.props.data}
            />
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="favorites"
            onPress={() => this.changeTab('favorites')}
            selected={this.props.tour.selectedTab === 'favorites'}
          >
            {this.renderTabs()}
          </TabBarIOS.Item>

          <TabBarIOS.Item
            systemIcon="contacts"
            onPress={() => this.changeTab('contacts')}
            selected={this.props.tour.selectedTab === 'contacts'}
          >
            {this.renderTabs()}
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
