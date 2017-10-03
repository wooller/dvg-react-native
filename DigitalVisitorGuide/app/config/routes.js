/**
 * Created by Andy Wooller on 25/09/2017.
 * A single config file for all of the routes
 */

import { Navigation } from 'react-native-navigation';
import FirstScreen from '../routes/firstScreen/index';
import SecondScreen from '../routes/secondScreen/index';
import PrimarySideMenu from '../routes/primarySideMenu/index';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('digitalVisitorGuide.firstScreenName', () => FirstScreen, store, Provider);
    Navigation.registerComponent('digitalVisitorGuide.secondScreenName', () => SecondScreen, store, Provider);
    Navigation.registerComponent('digitalVisitorGuide.primarySideMenu', () => PrimarySideMenu, store, Provider);
}
