/**
 * Created by Andy Wooller on 25/09/2017.
 */
import React from 'react';
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    image: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover',
    },
    imageOverlay: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },
    container: {
        width: null,
        height: null,
        flex: 1,
        paddingTop: 15,
        paddingLeft: 22,
        paddingRight: 22
    },
    logoImage: {
      height: 47,
      width: 123,
      resizeMode: 'contain'
    },
    topContainer: {
      flex: 1
    },
    bottomContainer: {
      flex: 1
    },
    titleText: {
      color: 'white'
    },
    subtitleText: {
      color: 'white',
      marginTop: 25,
      marginBottom: 20
    },
    button: {
      marginLeft: -22
    }
});
