/**
 * Created by Andy Wooller on 25/09/2017.
 */

import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import {globalStyles} from '../../config/styles';

export default StyleSheet.create({
    container: {
        width: null,
        height: null,
        flex: 1,
        backgroundColor: 'white'
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
    title: {
        color: globalStyles.darkGrey,
        marginLeft: 20,
        marginRight: 20
    }
});
