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

    const allSections = [
        {
            title: 'Welcome',
            image: images.welcomeAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        },
        {
            title: 'St Thomas’ Tower and Traitors Gate',
            image: images.thomasAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Traitors Gate',
            contentType: 'tour'
        },
        {
            title: 'Medieval Palace',
            image: images.medievalAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        },
        {
            title: 'Normans and before',
            image: images.normansAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        },
        {
            title: 'Imprisonment and Execution',
            image: images.imprisonmentAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        },
        {
            title: 'Overview of The Crown Jewels',
            image: images.crownAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        },
        {
            title: 'Life at The Tower',
            image: images.towerAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        }
    ];

    const fortressSections = [
        {
            title: 'Normans and before',
            image: images.normansAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        }
    ];

    const palaceSections = [
        {
            title: 'Medieval Palace',
            image: images.medievalAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        },
        {
            title: 'Overview of The Crown Jewels',
            image: images.crownAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
        }
    ];

    const prisonSections = [
        {
            title: 'Imprisonment and Execution',
            image: images.imprisonmentAccordionImage,
            tourLength: '15 MINS',
            description: 'Step inside the luxurious lodgings of two ancient kings when you visit the Medieval Palace.',
            startLocation: 'Starts at Medieval Palace',
            contentType: 'tour'
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
                underlayColor={'transparent'}
            >
                <View style={{flex: 1}} tabLabel='All'>
                    <FlatList
                        data={[{key: allSections}]}
                        renderItem={({item}) => (<ContentAccordion sections={item.key}/>)}
                    />
                </View>
                <View style={{flex: 1}} tabLabel='Fortress'>
                    <FlatList
                        data={[{key: fortressSections}]}
                        renderItem={({item}) => (<ContentAccordion sections={item.key}/>)}
                    />
                </View>
                <View style={{flex: 1}} tabLabel='Palace'>
                    <FlatList
                        data={[{key: palaceSections}]}
                        renderItem={({item}) => (<ContentAccordion sections={item.key}/>)}
                    />
                </View>
                <View style={{flex: 1}} tabLabel='Prison'>
                    <FlatList
                        data={[{key: prisonSections}]}
                        renderItem={({item}) => (<ContentAccordion sections={item.key}/>)}
                    />
                </View>
            </ScrollableTabView>

        </View>
    );
};

ExploreScreen.propTypes = {

};

export default ExploreScreen;
