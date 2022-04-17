import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {FONT_XLARGE} from '../../constants/LAYOUT';
import {BLUE} from '../../constants/COLORS';
import TemplateIcon from '../../components/TemplateIcon';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.search}>Search</TextInput>
      <TemplateIcon name="search" size={50} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  search: {
    fontSize: FONT_XLARGE,
    color: BLUE,
  },
});
