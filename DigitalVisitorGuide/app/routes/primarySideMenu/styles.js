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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: globalStyles.accentColor
    }
});
