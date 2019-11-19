/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HelloWorld from './components/03/HelloWorld';
import Robot from './components/04/Robot';
import MultipleGreeting from './components/04/MultipleGreetings';
import TextBlink from './components/05/TextBlink';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => TextBlink);
