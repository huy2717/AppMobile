/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import AppNavigator from './myapp/AppNavigator'
import ProductsScreen from './myapp/screens/ProductsScreen'


AppRegistry.registerComponent(appName, () => AppNavigator );
