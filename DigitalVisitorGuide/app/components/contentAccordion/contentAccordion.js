/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this component does
 * Include what prop types it uses and any additional infomation
 */

import React from 'react';
import { Text, TouchableOpacity, View, Animated, Image } from 'react-native';
import {ViewPropTypes} from 'react-native';
import {PropTypes} from 'prop-types'
import styles from './styles';
import textStyles from '../../config/textStyles';
import createReactClass from 'create-react-class';
import Accordion from 'react-native-collapsible/Accordion';


const ContentAccordion = createReactClass({
    propTypes: {
        sections: PropTypes.array
    },

    getDefaultProps() {
        return {
            activeTextColor: 'red',
            inactiveTextColor: 'black',
            backgroundColor: null,
        };
    },

    _renderHeader(section) {
        return (
            <View style={styles.header}>
                <Image style={styles.headerImage} source={section.image}>
                    <View style={styles.spacerContainer} />
                    <View style={styles.headerTitleContainer}>
                        <Text style={[textStyles.contentAccordionTitle, styles.headerTitle]}>{section.title}</Text>
                    </View>
                </Image>

            </View>
        );
    },

    _renderContent(section) {
        return (
            <View style={styles.expandedView}>
                <Text>{section.title}</Text>
            </View>
        );
    },

    render() {

        return (
                <Accordion
                    sections={this.props.sections}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                />
        );
    },
});

module.exports = ContentAccordion;
