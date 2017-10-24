/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this screen does
 * where is it called from
 */

import React, { PureComponent } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import MenuButton from '../../components/menuButton/index'
import textStyles from '../../config/textStyles';
import buttonStyles from '../../config/buttonStyles'
import Icon from '../../config/customIcons';
import Button from '../../components/button/index'
import AudioPlayer from '../../components/audioPlayer/index'
import * as Animatable from 'react-native-animatable';

export default class TrackScreen extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.trackInfo}>
                    <Image style={styles.trackImage} source={images.trackScreenImage}>
                        <View style={styles.headerContainer}>
                            <TouchableOpacity
                                onPress={() => this.props.navigator.pop({animated: true, animationType: 'fade',})}>
                                <Icon name="back" style={styles.backIcon} size={30} color="#fff"/>
                            </TouchableOpacity>
                            <MenuButton style={styles.menuButton}
                                        color={'#ffffff'}
                                        onPress={() => this.props.navigator.toggleDrawer({
                                            side: 'right',
                                            animated: true
                                        }) }/>
                        </View>
                        <View style={styles.detailSpacer}/>
                        <Animatable.View animation="fadeInUp" useNativeDriver={true} duration={1000} delay={750}
                                         style={styles.trackDetail}>
                            <Text style={[textStyles.trackScreenRouteTitle, styles.routeTitle]}>Medieval Palace</Text>
                            <Text style={[textStyles.trackScreenTrackTitle, styles.trackTitle]}>Fabrics and
                                furnishings</Text>
                            <Text style={[textStyles.contentAccordionDescription, styles.trackDescription]}>Lorem ipsum
                                dolor sit amet, consectetur adipiscing elit. Praesent cursus erat sem, sodales porttitor
                                sapien ultricies at. So does this text go?</Text>
                            <Button text="Explore deeper"
                                    buttonStyles={[buttonStyles.contentAccordionButton, styles.diveButton]}
                                    textStyles={buttonStyles.contentAccordionButtonText} hasChevron={true}/>
                        </Animatable.View>
                    </Image>
                </View>
                <Animatable.View animation="fadeIn" useNativeDriver={true} duration={750} delay={250}
                                 style={styles.mediaPlayer}>
                    <AudioPlayer/>
                </Animatable.View>
            </View>
        );
    }
};
