/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this screen does
 * where is it called from
 */

import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import MenuButton from '../../components/menuButton/index'
import textStyles from '../../config/textStyles';

const ExploreScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <MenuButton style={styles.menuButton} onPress={() => this.props.navigator.toggleDrawer({side: 'right', animated: true}) }/>
            </View>
            <Text style={[textStyles.headingThree, styles.title]}>Explore the Tower</Text>
        </View>
    );
};

ExploreScreen.propTypes = {

};

export default ExploreScreen;
