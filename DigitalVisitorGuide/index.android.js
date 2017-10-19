/**
 * Created by Andy on 25/07/2017.
 * Entry point into the the Android app
 * this is where the app now looks at app/index.js
 * and the app is registered.
 */

import { AppRegistry } from 'react-native';
import App from './app/index';
import { Immersive } from 'react-native-immersive'
Immersive.on();

AppRegistry.registerComponent('DigitalVisitorGuide', () => App);
