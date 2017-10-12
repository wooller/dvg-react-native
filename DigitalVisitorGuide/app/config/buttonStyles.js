/**
 * Created by Andy Wooller on 25/09/2017.
 */
import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    buttonOne:{
      backgroundColor: '#908F88',
      height: 50,
      minWidth: 200,
      alignSelf: 'flex-start',
      alignItems: 'center'
    },
    buttonOneText:{
      fontFamily: 'FaraoText',
      fontSize: 16,
      fontWeight: 'normal',
      marginLeft: 22
    },
    contentAccordionButton:{
        backgroundColor: '#908F88',
        height: 50,
        minWidth: 140,
        alignSelf: 'flex-start',
        alignItems: 'center'
    },
    contentAccordionButtonText:{
        fontFamily: 'FaraoText',
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'normal',
        marginLeft: 15
    }
});
