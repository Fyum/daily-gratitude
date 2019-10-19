
import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import ViewEntries from './ViewEntries';
import ViewSettings from './ViewSettings';
import MainHeader from './MainHeader'

import themeStyle from '../themes/styles';
const {
  headerBackgroundColor,
  contentBackgroundColor,
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
  },
  {
    // Drawer configuration
    drawerBackgroundColor: '#29134A',
    contentOptions: {
      inactiveTintColor: textColor,
      activeTintColor: '#ECD1D5',
      activeBackgroundColor: '#AF656F',
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
    }
  }
  return currentView('settings');
}

const ENV = 'dev'
export default (ENV === 'dev' ? MainApp : createAppContainer(DrawerNavigator))