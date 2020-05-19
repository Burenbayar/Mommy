/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
<<<<<<< HEAD
import Navigate from './src/ContentNews/Navigate';

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => Navigate);
=======
import Tools from './src/tools/tools';
import FirstScreen from './src/tools/index';
import but from './src/tools/name/Btton'
import lavlah from './src/Lavlah/Lavlah';
import News from './src/Common/NewsComponent/newsComponent';

<<<<<<< HEAD
AppRegistry.registerComponent(appName, () => News);
=======
AppRegistry.registerComponent(appName, () => FirstScreen);
>>>>>>> 49ff254320ea9a37bde0261aead9e6c9c296535d
>>>>>>> 80b8868c26f378ad3d3b81f82442872f9925b4ad
