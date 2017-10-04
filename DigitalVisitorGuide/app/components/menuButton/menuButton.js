/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this component does
 * Include what prop types it uses and any additional infomation
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const MenuButton = (props) => {
    const { onPress, color } = props;
    return (
      <TouchableOpacity onPress={onPress}>
        <Icon name="ios-menu" size={40} color={color} />
      </TouchableOpacity>
    );
};

MenuButton.propTypes = {
    onPress: React.PropTypes.func,
};

MenuButton.defaultProps = {
    onPress: () => console.log('Button Pressed'),
    color: '#333333'
};

export default MenuButton;
