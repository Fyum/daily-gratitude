
import React, { Component } from 'react';

import { View } from 'react-native'

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import ViewEntries from './ViewEntries';
import ViewSettings from './ViewSettings';
import MainHeader from './MainHeader'



class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <MainHeader
           onClickMenu={this.toggleDrawer.bind(this)}
        />
      </View>
    );
  }
}

const StackNavigatorViewEntries = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: ViewEntries,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});

const StackNavigatorViewSettings = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  Second: {
    screen: ViewSettings,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#FFF',
      },
      headerTintColor: '#fff',
    }),
  },
});


const DrawerNavigator = createDrawerNavigator({
  //Drawer Optons and indexing
  ViewEntries: { //Title
    screen: StackNavigatorViewEntries,
    navigationOptions: {
      drawerLabel: "Home"
    }
  },
  ViewSettings: { //Title
    screen: StackNavigatorViewSettings,
    navigationOptions: {
      drawerLabel: "Settings"
    }
  },
});
export default createAppContainer(DrawerNavigator);


// const MainApp = () =>{ 

//   return (
//     <ViewEntries />
//   )
// }

// export default MainApp;