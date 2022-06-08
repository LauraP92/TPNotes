import {StyleSheet, View} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {RADIUS_MEDIUM} from '../constants/LAYOUT';

const CircleButton = ({color, onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.circle, {backgroundColor: color}]} />
    </Pressable>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  circle: {
    borderRadius: RADIUS_MEDIUM,
    height: 30,
    width: 30,
  },
});
