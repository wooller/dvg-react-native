/**
 * Created by Andy Wooller on 25/09/2017.
 */

import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import {globalStyles} from '../../config/styles';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white'
    },
    trackInfo: {
        flex: 1,
    },
    menuButton:{
        alignSelf: 'flex-end'
    },
    headerContainer: {
        height: 30,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        alignItems: 'flex-end',
    },
    trackImage:{
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover',
    },
    detailSpacer:{
      flex: 1
    },
    trackDetail:{
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: 20,
    },
    routeTitle:{
        marginBottom: 10
    },
    trackTitle: {
        marginBottom: 10
    },
    trackDescription:{
        marginBottom: 20
    },
    diveButton:{
        backgroundColor: '#CC1840'
    },
    mediaPlayer: {
        flex: 0.25,
        marginLeft: 20,
        marginRight: 20
    }
});
