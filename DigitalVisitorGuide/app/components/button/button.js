/**
 * Created by Andy Wooller on 25/09/2017.
 * Insert a description about what this component does
 * Include what prop types it uses and any additional infomation
 */

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = (props) => {
    const { buttonStyles, textStyles, text, onPress, hasChevron } = props;
    let chevron = null
    if (hasChevron){
       chevron = (<Icon name="chevron-right" style={styles.chevron} size={15} color="#fff" />)
    }
    return (
        <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onPress}>
            <Text style={[styles.buttonText, textStyles]}>
                {text}
            </Text>
            {chevron}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    text: React.PropTypes.string,
    onPress: React.PropTypes.func,
};

Button.defaultProps = {
    text: 'Button Text',
    onPress: () => console.log('Button Pressed'),
};

export default Button;
