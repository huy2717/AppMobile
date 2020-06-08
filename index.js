/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AppNavigator from './myapp/AppNavigator'
import TabNavigator from './myapp/TabNavigator'


AppRegistry.registerComponent(appName, () => AppNavigator );
