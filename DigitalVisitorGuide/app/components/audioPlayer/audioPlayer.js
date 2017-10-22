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
import {globalStyles} from '../../config/styles';
import Slider from "react-native-slider";
import createReactClass from 'create-react-class';
import Icon from '../../config/customIcons';
import {Player, Recorder, MediaStates} from 'react-native-audio-kit';

import Reactotron from 'reactotron-react-native'

let filename = 'tol_audio_clip.mp3';

const AudioPlayer = createReactClass({

    getInitialState: function() {
        return {
            progress: 0,
            playPauseButton: <Icon name="play" style={styles.playIcon} size={60} color="#000" />,
        };

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

    componentWillMount() {
        this.player = null;
        this._reloadPlayer();
        this.lastSeek = 0;

        this._progressInterval = setInterval(() => {
            if (this.player && this._shouldUpdateProgressBar()) {// && !this._dragging) {
                this.setState({progress: Math.max(0, this.player.currentTime) / this.player.duration});
            }
        }, 100);
    },

    componentWillUnmount() {
        //console.log('unmount');
        // TODO
        clearInterval(this._progressInterval);
    },

    _shouldUpdateProgressBar() {
        // Debounce progress bar update by 200 ms
        return Date.now() - this.lastSeek > 200;
    },

    _updateState(err) {
        this.setState({
            playPauseButton: this.player && this.player.isPlaying  ? <Icon name="pause" style={styles.playIcon} size={60} color="#000" /> : <Icon name="play" style={styles.playIcon} size={60} color="#000" />,

            //playButtonDisabled:   !this.player   || !this.player.canPlay || this.recorder.isRecording,

        });
    },

    _reloadPlayer() {
        if (this.player) {
            this.player.destroy();
        }

        this.player = new Player(filename, {
            autoDestroy: false
        }).prepare((err) => {
            if (err) {
                Reactotron.log('error at _reloadPlayer():');
                Reactotron.log(err);
            } else {

            }

            this._updateState();
        });

        this._updateState();

        this.player.on('ended', () => {
            this._updateState();
        });

        this.player.on('pause', () => {
            this._updateState();
        });
    },

    _playPause() {
        this.player.playPause((err, playing) => {
            if (err) {
                this.setState({
                    error: err.message
                });
            }
            this._updateState();
        });
    },

    _seek(percentage) {
        if (!this.player) {
            return;
        }

        this.lastSeek = Date.now();

        let position = percentage * this.player.duration;

        this.player.seek(position, () => {
            this._updateState();
        });
    },

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Slider
                        style={styles.scrubber}
                        value={this.state.progress}
                        onValueChange={(percentage) => this._seek(percentage)}
                        minimumTrackTintColor={globalStyles.red}
                        maximumTrackTintColor={globalStyles.darkGrey}
                        thumbTintColor={globalStyles.red}
                        thumbStyle={styles.scrubberThumb}
                    />
                </View>
                <View style={styles.bottomContainer}>
                    <Icon name="previous" style={styles.prevIcon} size={30} color="#000" />
                    <TouchableOpacity onPress={() => this._playPause()} >
                        {this.state.playPauseButton}
                    </TouchableOpacity>
                    <Icon name="next" style={styles.nextIcon} size={30} color="#000" />
                </View>
            </View>
        );
    },
});

module.exports = AudioPlayer;
