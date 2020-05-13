/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Tools from './src/tools/tools';
import FirstScreen from './src/tools/index';

AppRegistry.registerComponent(appName, () => FirstScreen);
