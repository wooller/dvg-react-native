/**
 * Created by Andy Wooller on 25/09/2017.
 * These are the styles for the button component
 * Include any additional information about the styles here
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
    },
    topContainer:{
        flex: 0.45,
        alignItems: "stretch",
        justifyContent: "flex-end",
    },
    timesContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scrubberThumb:{
        width: 10,
        height: 10,
    },
    bottomContainer:{
        flex: 0.55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    playIcon: {
        marginLeft: 30,
        marginRight: 30
    }
});
