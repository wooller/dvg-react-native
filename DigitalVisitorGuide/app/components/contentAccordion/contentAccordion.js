/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this component does
 * Include what prop types it uses and any additional infomation
 */

import React from 'react';
import { Text, TouchableOpacity, View, Animated, Image, ImageBackground } from 'react-native';
import {ViewPropTypes} from 'react-native';
import {PropTypes} from 'prop-types'
import tourStyles from './styles';
import textStyles from '../../config/textStyles';
import buttonStyles from '../../config/buttonStyles';
import createReactClass from 'create-react-class';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../button/index';

import Reactotron from 'reactotron-react-native'

let chevronIcon = null;

AnimIcon = Animatable.createAnimatableComponent(Icon);

const ContentAccordion = createReactClass({
    propTypes: {
        sections: PropTypes.array,
        onPress: React.PropTypes.func,
    },

    getDefaultProps() {
        return {
            activeTextColor: 'red',
            inactiveTextColor: 'black',
            backgroundColor: null,
        };
    },

    _animateIcon(){
      Reactotron.log(chevronIcon);
    },

    _renderTourHeader(section) {
        return (
            <View style={tourStyles.header}>
                <ImageBackground style={tourStyles.headerImageView} imageStyle={tourStyles.headerImage} source={section.image}>
                    <View style={tourStyles.spacerContainer} />
                    <View style={tourStyles.headerTitleContainer}>
                        <Text style={[textStyles.contentAccordionTitle, tourStyles.headerTitle]}>{section.title}</Text>
                        {/*<AnimIcon ref={(AnimIcon) => { chevronIcon = AnimIcon; }} name="chevron-down" style={tourStyles.contentAccordionExpandIcon} size={20} color="#000" />*/}
                    </View>
                </ImageBackground>
            </View>
        );
    },

    _renderTourContent(section) {
        return (
            <View style={tourStyles.expandedView}>
                <View style={tourStyles.expandedTourLengthView}>
                    <Icon name="clock-o" style={tourStyles.expandedTourLengthIcon} size={15} color="#000" />
                    <Text style={[textStyles.contentAccordionTourLength, tourStyles.expandedTourLength]}>{section.tourLength}</Text>
                </View>
                <View style={tourStyles.expandedDescriptionView}>
                    <Text style={[textStyles.contentAccordionDescription, tourStyles.expandedDescription]}>{section.description}</Text>
                </View>
                <View style={tourStyles.expandedStartTourView}>
                    <Button text="Start tour" buttonStyles={[buttonStyles.contentAccordionButton, tourStyles.expandedStartTourButton]} textStyles={buttonStyles.contentAccordionButtonText} hasChevron={true} onPress={this.props.onPress}/>
                    <Text style={[textStyles.contentAccordionLocationText, tourStyles.expandedLocationText]}>{section.startLocation}</Text>
                </View>
            </View>
        );
    },

    render() {

        return (
            <Accordion
                sections={this.props.sections}
                renderHeader={this._renderTourHeader}
                renderContent={this._renderTourContent}
                //onChange={() => this.chevronIcon.transitionTo({opacity: 0.2})}
                //onChange={() => chevronIcon.fadeOut(200)}
                //onChange={this._animateIcon}
            />
        );
    },
});

module.exports = ContentAccordion;
