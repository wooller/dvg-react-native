/**
 * Created by Andy Wooller on 25/09/2017.
 */

import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { globalStyles } from '../../config/styles';

export default StyleSheet.create({
    container: {
        width: null,
        height: null,
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50
    },
    textItem:{
        marginLeft: 10,
        color: 'black',
        textAlign: 'left',
        fontSize: 18,
        fontFamily: 'OpenSans-Medium'
    },
    menuIcon:{
        //alignSelf: 'flex-start',
    },
    menuItem:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 30,
        marginLeft: 30,
        marginRight: 30,
    }
});
