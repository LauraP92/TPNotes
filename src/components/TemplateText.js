import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {WHITE} from '../constants/COLORS';
import {FONT_SMALL, SPACE_SMALL} from '../constants/LAYOUT';

const TemplateText = ({text, style}) => {
  return (
    <View>
      <Text style={[styles.title, style]}>{text}</Text>
    </View>
  );
};

export default TemplateText;

const styles = StyleSheet.create({
  title: {
    color: WHITE,
    fontSize: FONT_SMALL,
    marginLeft: SPACE_SMALL,
  },
});
