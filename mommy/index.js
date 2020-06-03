import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
import Tools from './src/tools/tools';
<<<<<<< HEAD
import News from './src/Common/NewsComponent/newsComponent';
import HospitalInfo from './src/Lavlah/HospitalInfo';
import Lavlah from './src/Lavlah/Lavlah/Lavlah';
import Navigate from './src/ContentNews/Navigate';
import specialNum from './src/Lavlah/SpecialNum'

AppRegistry.registerComponent(appName, () => Lavlah);
=======
import FirstScreen from './src/tools/index';
import Navigate from './src/ContentNews/Navigate';
import StackNavigation from './src/Form/StackNavigation';
import Get from './src/Form/getData';
import Home from './src/Group/Home/home';
AppRegistry.registerComponent(appName, () => Navigate);
>>>>>>> 627f32184c942710e6a8162cdab73a51fcc88a5c
