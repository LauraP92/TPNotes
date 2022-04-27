import {StyleSheet} from 'react-native';
import React from 'react';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TemplateIcon from './TemplateIcon';
import {BLUE} from '../constants/COLORS';

const DeleteNoteButton = () => {
  return (
    <Pressable style={styles.container}>
      <TemplateIcon style={styles.icon} name="trash" size={25} color={BLUE} />
    </Pressable>
  );
};

export default DeleteNoteButton;

const styles = StyleSheet.create({
  container: {},
});
