/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this screen does
 * where is it called from
 */

import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from './styles';
import images from '../../config/images';
import MenuButton from '../../components/menuButton/index'
import textStyles from '../../config/textStyles';
import TabBar from '../../components/tabBar/index'

import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import ContentAccordion from '../../components/contentAccordion/index';

const ExploreScreen = (props) => {

    const sections = [
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
        },
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
        },
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
        },
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
        },
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
        },
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
        }
    ];

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <MenuButton style={styles.menuButton} onPress={() => this.props.navigator.toggleDrawer({side: 'right', animated: true}) }/>
            </View>
            <Text style={[textStyles.headingThree, styles.title]}>Explore the Tower</Text>
            <ScrollableTabView
                style={{marginTop: 20, }}
                initialPage={1}
                renderTabBar={() => <TabBar />}
                tabBarTextStyle={textStyles.tabBarHeading}
            >
                <View style={{flex: 1}} tabLabel='All'>
                    <FlatList
                        data={[{key: sections}]}
                        renderItem={({item}) => (<ContentAccordion sections={item.key}/>)}
                    />
                </View>
                <Text tabLabel='Fortress'>test</Text>
                <Text tabLabel='Palace'>project</Text>
                <Text tabLabel='Prison'>project</Text>
            </ScrollableTabView>

        </View>
    );
};

ExploreScreen.propTypes = {

};

export default ExploreScreen;
