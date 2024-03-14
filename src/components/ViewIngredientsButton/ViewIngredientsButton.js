import React from 'react';
import { TouchableHighlight, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default function ViewIngredientsButton (props) {
    return (
      <TouchableHighlight underlayColor='rgba(248, 176, 173,0.9)' onPress={props.onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>Meer informatie</Text>
        </View>
      </TouchableHighlight>
    );
}

ViewIngredientsButton.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.number,
  title: PropTypes.string
};