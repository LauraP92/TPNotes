import {StyleSheet} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TemplateIcon from './TemplateIcon';

const IconButton = ({name, size, onPress, family}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <TemplateIcon
        style={styles.icon}
        name={name}
        size={size}
        family={family}
      />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {},
});
