import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {FONT_XLARGE, SPACE_MEDIUM} from '../../constants/LAYOUT';
import {BLUE} from '../../constants/COLORS';
import {CARDS} from '../../constants/CARDS';

const NoteDetails = ({route}) => {
  const {id} = route.params;
  const filteredNotes = CARDS.find(card => {
    return card.id === id;
  });
  const {title, description} = filteredNotes;

  return (
    <View>
      <TextInput
        style={styles.text}
        placeholder={'Title (optional)'}
        placeholderTextColor={`${BLUE}80`}
      />
      <TextInput
        style={styles.text}
        placeholder={'Type your note here'}
        placeholderTextColor={`${BLUE}80`}
      />
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  text: {
    fontSize: FONT_XLARGE,
    color: BLUE,
    marginLeft: SPACE_MEDIUM,
  },
});
