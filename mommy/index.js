
import {AppRegistry} from 'react-native';
import App from './App';
import Form from './src/Form';
import {name as appName} from './app.json';
import Tools from './src/tools/tools';
import News from './src/Common/NewsComponent/newsComponent';
import HospitalInfo from './src/Lavlah/HospitalInfo';
import Lavlah from './src/Lavlah/Lavlah/Lavlah';
import test from './src/Lavlah/test';
import Navigate from './src/ContentNews/Navigate';
import specialNum from './src/Lavlah/SpecialNum'

AppRegistry.registerComponent(appName, () => specialNum);
