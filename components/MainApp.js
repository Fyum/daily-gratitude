
import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import ViewEntries from './ViewEntries';
import ViewSettings from './ViewSettings';
import MainHeader from './MainHeader'


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


const DrawerNavigator = createDrawerNavigator({
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
});
export default createAppContainer(DrawerNavigator);