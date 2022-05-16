import {StyleSheet} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TemplateIcon from './TemplateIcon';
import {BLUE} from '../constants/COLORS';
import {SPACE_LARGE} from '../constants/LAYOUT';

const DeleteButton = () => {
  return (
    <Pressable style={styles.container}>
      <TemplateIcon style={styles.icon} name="trash" size={40} color={BLUE} />
    </Pressable>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: SPACE_LARGE,
    bottom: SPACE_LARGE,
  },
});
