/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this screen does
 * where is it called from
 */

import React, { PureComponent } from 'react';
import { Text, View, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import textStyles from '../../config/textStyles';
import {globalStyles} from '../../config/styles';
import Icon from '../../config/customIcons';

export default class PrimarySideMenu extends PureComponent {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ScrollView scrollsToTop={false} style={styles.container}>
                <TouchableNativeFeedback  onPress={() => {this.props.navigator.toggleDrawer({side: 'right', animated: true}); this.props.navigator.push({screen: 'digitalVisitorGuide.exploreScreen', animationType: globalStyles.navigationAnimation})}}>
                    <View style={styles.menuItem}>
                        <Icon name="explore" style={styles.menuIcon} size={20} color={globalStyles.darkGrey} />
                        <Text style={[textStyles.menuItemText, styles.textItem]}>Explore</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.menuItem}>
                    <Icon name="plan" style={styles.menuIcon} size={20} color={globalStyles.darkGrey} />
                    <Text style={[textStyles.menuItemText, styles.textItem]}>Plan your day</Text>
                </View>
                <View style={styles.menuItem}>
                    <Icon name="cafe" style={styles.menuIcon} size={15} color={globalStyles.darkGrey} />
                    <Text style={[textStyles.menuItemText, styles.textItem]}>Food and Drink</Text>
                </View>
                <View style={styles.menuItem}>
                    <Icon name="shops" style={styles.menuIcon} size={20} color={globalStyles.darkGrey} />
                    <Text style={[textStyles.menuItemText, styles.textItem]}>Shops</Text>
                </View>
                <View style={styles.menuItem}>
                    <Icon name="settings" style={styles.menuIcon} size={20} color={globalStyles.darkGrey} />
                    <Text style={[textStyles.menuItemText, styles.textItem]}>Change language</Text>
                </View>
            </ScrollView>
        );
    }

};
