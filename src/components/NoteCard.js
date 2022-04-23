import {StyleSheet} from 'react-native';
import React from 'react';
import {SPACE_XLARGE} from '../constants/LAYOUT';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import TemplateText from './TemplateText';

const NoteCard = ({title, description, color, id, navigation}) => {
  //  <<-- All props need to be destructured here
  return (
    <Pressable
      style={[styles.button, {backgroundColor: color}]}
      onPress={() =>
        navigation.navigate('NoteDetails', {
          id: id,
        })
      }>
      <TemplateText text={`${title}`} />
      <TemplateText text={`${description}`} />
    </Pressable>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  button: {
    height: 80,
    marginRight: SPACE_XLARGE,
    marginBottom: SPACE_XLARGE,
    justifyContent: 'center',
  },
});