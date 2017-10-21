/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this component does
 * Include what prop types it uses and any additional infomation
 */

import React from 'react';
import { Text, TouchableOpacity, View, Animated, Image, ImageBackground } from 'react-native';
import {ViewPropTypes} from 'react-native';
import {PropTypes} from 'prop-types'
import styles from './styles';
import textStyles from '../../config/textStyles';
import buttonStyles from '../../config/buttonStyles';
import {globalStyles} from '../../config/styles';
import Slider from "react-native-slider";
import createReactClass from 'create-react-class';
import Icon from '../../config/customIcons';

import Reactotron from 'reactotron-react-native'

const AudioPlayer = createReactClass({

    getInitialState: function() {
        return {value: 0.2};
    },

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

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Slider
                        style={styles.scrubber}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                        minimumTrackTintColor={globalStyles.red}
                        maximumTrackTintColor={globalStyles.darkGrey}
                        thumbTintColor={globalStyles.red}
                        thumbStyle={styles.scrubberThumb}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Icon name="previous" style={styles.prevIcon} size={30} color="#000" />
                    <Icon name="play" style={styles.playIcon} size={60} color="#000" />
                    <Icon name="next" style={styles.nextIcon} size={30} color="#000" />
                </View>
            </View>
        );
    },
});

module.exports = AudioPlayer;
