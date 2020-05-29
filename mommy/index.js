/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
import Tools from './src/tools/tools';
import FirstScreen from './src/tools/index';
import Navigate from './src/ContentNews/Navigate';
import StackNavigation from './src/Form/StackNavigation';
import Get from './src/Form/getData';

AppRegistry.registerComponent(appName, () => StackNavigation);
