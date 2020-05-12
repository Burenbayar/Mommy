/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navigate from './src/ContentNews/Navigate';
import News from './src/Common/newsComponent'
import HospitalComponent from './src/Lavlah/HospitalComponent'
import SpecialNum from './src/Lavlah/SpecialNum'
AppRegistry.registerComponent(appName, () => SpecialNum);
