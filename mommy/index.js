/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
import Navigate from './src/ContentNews/Navigate';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Form);
