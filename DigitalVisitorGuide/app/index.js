/**
 * Created by Andy Wooller on 25/09/2017.
 * Entry point into the App
 * is called from index.android.js and index.ios.js
 */

import React from 'react'; // eslint-disable-line
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import settings from './config/settings';
import configureStore from './config/store';
import { registerScreens } from './config/routes';
import './config/ReactotronConfig';
import {requestStoragePermission} from './config/AndroidPermissions';
import Reactotron from 'reactotron-react-native'

const store = configureStore();
registerScreens(store, Provider);
requestStoragePermission();

Navigation.startSingleScreenApp({
    appStyle: {
        keepStyleAcrossPush: false
    },
    screen: {
        screen: 'digitalVisitorGuide.trackScreen',
    },
    drawer: {
      right: {
        screen: 'digitalVisitorGuide.primarySideMenu',
        passProps: {}
      }
    }
});
