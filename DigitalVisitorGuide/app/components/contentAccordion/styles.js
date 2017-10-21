/**
 * Created by Andy Wooller on 25/09/2017.
 * These are the styles for the button component
 * Include any additional information about the styles here
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        height: 255,
    },
    spacerContainer: {
        flex: 1,
    },
    headerImage: {
        width: null,
        height: null,
        flex: 1,
        resizeMode: 'cover',
    },
    headerImageView:{
        flex: 1
    },
    headerTitleContainer:{
        flexDirection: 'row',
        backgroundColor: 'rgba(255,255,255,0.8)',
        justifyContent: 'space-between'
    },
    headerTitle:{
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 15,
        flex: 10
    },
    contentAccordionExpandIcon: {
        marginRight: 15,
        alignSelf: 'center',
        flex: 1
    },
    expandedView:{
        height: 250
    },
    expandedTourLengthView:{
        flexDirection: 'row',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        paddingBottom: 20
    },
    expandedTourLengthIcon:{
        marginRight: 10
    },
    expandedTourLength:{

    },
    expandedDescriptionView:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 40
    },
    expandedStartTourButton:{
        backgroundColor: '#CC1840'
    },
    expandedStartTourView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 15
    },
    expandedLocationText:{
        alignSelf: 'center'
    }

});
