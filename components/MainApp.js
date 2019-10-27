
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import ViewEntries from './ViewEntries';
import ViewSettings from './ViewSettings';
import ViewSearch from './ViewSearch'
import MainHeader from './MainHeader'

import themeStyle from '../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
  contentBackgroundColor2,
  textColor,
} = themeStyle;

/**
 * Documentation see : https://reactnavigation.org/docs/en
 */

const NavigationDrawerHeader = ({ navigationProps }) =>
  <MainHeader onClickMenu={navigationProps.toggleDrawer} />

const StackNavigatorViewEntries = createStackNavigator({
  First: {
    screen: ViewEntries,
    navigationOptions: ({ navigation }) => ({
      title: 'View entries screen',
      header: <NavigationDrawerHeader navigationProps={navigation} />,
    }),
  },
});

const StackNavigatorViewSettings = createStackNavigator({
  Second: {
    screen: ViewSettings,
    navigationOptions: ({ navigation }) => ({
      title: 'View settings screen',
      header: <NavigationDrawerHeader navigationProps={navigation} />,
    }),
  },
});

const StackNavigatorViewSearch = createStackNavigator({
  Third: {
    screen: ViewSearch,
    navigationOptions: ({ navigation }) => ({
      title: 'View search screen',
      header: <NavigationDrawerHeader navigationProps={navigation} />,
    }),
  },
});


const DrawerNavigator = createDrawerNavigator(
  {
    //Drawer Optons and indexing
    ViewEntries: {
      screen: StackNavigatorViewEntries,
      navigationOptions: {
        drawerLabel: "Entries"
      }
    },
    ViewSettings: {
      screen: StackNavigatorViewSettings,
      navigationOptions: {
        drawerLabel: "Settings"
      }
    },
    ViewSearch: {
      screen: StackNavigatorViewSearch,
      navigationOptions: {
        drawerLabel: "Search"
      }
    },
  },
  {
    // Drawer configuration
    drawerBackgroundColor: '#29134A',
    contentOptions: {
      inactiveTintColor: textColor,
      activeTintColor: '#ECD1D5',
      activeBackgroundColor: contentBackgroundColor2,
      itemStyle: {
        paddingLeft: 20,
      }
    }
  }
);

const MainApp = () => {
  const currentView = (name) => {
    switch (name) {
      case 'entries': 
        return <ViewEntries />
      case 'settings': 
        return <ViewSettings />
      case 'search':
        return <ViewSearch />
    }
  }
  return currentView('entries'); // Change here for the page you want to work on
}

const ENV = ''
export default (ENV === 'dev' ? MainApp : createAppContainer(DrawerNavigator))