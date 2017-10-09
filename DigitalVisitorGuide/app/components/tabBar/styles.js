/**
 * Created by Andy Wooller on 25/09/2017.
 * These are the styles for the button component
 * Include any additional information about the styles here
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 0,
    },
    tabs: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    tabUnderline:{
        backgroundColor: 'red',
        flex: 1,
        marginLeft: 15,
        marginRight: 15
    }
});
