/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this screen does
 * where is it called from
 */

import React, { PureComponent } from 'react';
import { Text, View, Image, StatusBar, TextInput } from 'react-native';
import styles from './styles';
import textStyles from '../../config/textStyles';
import buttonStyles from '../../config/buttonStyles';
import images from '../../config/images';
import Button from '../../components/button/index'

export default class FirstScreen extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Image style={styles.image} source={images.welcomeScreenImage}>
                <View style={styles.imageOverlay}></View>
                <View style={styles.container}>
                  <View style={styles.topContainer}>
                    <Image style={styles.logoImage} source={images.towerOfLondonLogo} />
                  </View>
                  <View style={styles.bottomContainer}>
                    <Text style={[textStyles.headingOne, styles.titleText]}>Fortress, Palace and Prison</Text>
                    <Text style={[textStyles.headingTwo, styles.subtitleText]}>Discover three sides of the Towers amazing story</Text>
                    <Button text={'Get Started'} buttonStyles={[buttonStyles.buttonOne, styles.button]} textStyles={buttonStyles.buttonOneText} hasChevron={true}/>
                  </View>
                </View>
            </Image>
        );
    }
}
