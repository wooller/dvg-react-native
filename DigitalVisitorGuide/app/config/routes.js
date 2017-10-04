/**
 * Created by Andy Wooller on 25/09/2017.
 * A single config file for all of the routes
 */

import { Navigation } from 'react-native-navigation';
import WelcomeScreen from '../routes/welcomeScreen/index';
import ExploreScreen from '../routes/exploreScreen/index';
import PrimarySideMenu from '../routes/primarySideMenu/index';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('digitalVisitorGuide.welcomeScreen', () => WelcomeScreen, store, Provider);
    Navigation.registerComponent('digitalVisitorGuide.exploreScreen', () => ExploreScreen, store, Provider);
    Navigation.registerComponent('digitalVisitorGuide.primarySideMenu', () => PrimarySideMenu, store, Provider);
}
