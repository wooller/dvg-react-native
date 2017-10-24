/**
 * Created by Andy Wooller on 25/09/2017.
 * These are the styles for the button component
 * Include any additional information about the styles here
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        paddingVertical: 20,
        alignSelf: "stretch",
        alignItems: 'center',
        backgroundColor: 'black',
        flexDirection:'row'

    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        justifyContent: 'flex-start'
    },
    chevron:{
      marginLeft: 15,
      marginRight: 15
    }
});
