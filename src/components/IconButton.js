import {StyleSheet} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TemplateIcon from './TemplateIcon';
import {BLUE} from '../constants/COLORS';

const IconButton = ({name, size, onPress, family}) => {
  return (
    <Pressable style={styles.container}>
      <TemplateIcon
        style={styles.icon}
        name={name}
        size={size}
        family={family}
        color={BLUE}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {},
});
