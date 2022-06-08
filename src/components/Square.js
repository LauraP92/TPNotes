import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Square = ({color}) => {
  return <View style={[styles.square, {backgroundColor: color}]} />;
};

export default Square;

const styles = StyleSheet.create({
  square: {
    height: 60,
    width: 80,
    marginBottom: 10,
  },
});
