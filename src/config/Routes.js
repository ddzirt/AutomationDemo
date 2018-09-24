import {
  //   createSwitchNavigator,
  createStackNavigator,
  //   createMaterialTopTabNavigator,
  //   createDrawerNavigator,
  //   DrawerActions
} from 'react-navigation';

import HomeScreen from '../screens/Home';

const appStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    headerMode: 'none',
  },
);

export default appStack;
