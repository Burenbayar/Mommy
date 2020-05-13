/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
import SpecialNum from './src/Lavlah/SpecialNum';
import Lavlah from './src/Lavlah/Lavlah';
import newsComponent from './src/Common/NewsComponent/newsComponent';

AppRegistry.registerComponent(appName, () => Form);
