import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import {BLUE} from '../constants/COLORS';
import {BORDER_MEDIUM, RADIUS_XXLARGE, SPACE_LARGE} from '../constants/LAYOUT';

const ActionButton = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.circle}>
        <Text style={styles.sign}>+</Text>
      </Pressable>
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: SPACE_LARGE,
    bottom: SPACE_LARGE,
  },
  circle: {
    borderWidth: BORDER_MEDIUM,
    borderRadius: RADIUS_XXLARGE,
    borderColor: BLUE,
    height: 60,
    width: 60,
    alignItems: 'center',
  },
  sign: {
    color: BLUE,
    fontSize: 60,
    lineHeight: 60,
    fontWeight: '300',
  },
});
