/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
import Tools from './src/tools/tools';
import FirstScreen from './src/tools/index';
import but from './src/tools/name/Btton'
import lavlah from './src/Lavlah/Lavlah';
import News from './src/Common/NewsComponent/newsComponent';

AppRegistry.registerComponent(appName, () => News);
