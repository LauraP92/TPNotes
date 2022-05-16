import {StyleSheet, TextInput, View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FONT_XLARGE, SPACE_LARGE} from '../../constants/LAYOUT';
import {BLUE} from '../../constants/COLORS';
import {CARDS} from '../../constants/CARDS';
import IconButton from '../../components/IconButton';
import {ICONS} from '../../constants/ICONS';
import DeleteNoteButton from '../../components/DeleteNoteButton';
import TemplateText from '../../components/TemplateText';

const NoteDetails = ({route, navigation}) => {
  const {id} = route.params;
  const filteredNotes = CARDS.find(card => {
    return card.id === id;
  });

  const {title, description, color} = filteredNotes;

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: color,
      },
      headerRight: () => {
        return <DeleteNoteButton />;
      },
    });
  }, []);

  const [details, setDetails] = useState('**ADADAA**');

  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.title}
          placeholder={'Title (optional)'}
          placeholderTextColor={`${BLUE}80`}
        />
        <TextInput
          style={styles.text}
          placeholder={'Type your note here'}
          placeholderTextColor={`${BLUE}80`}
          multiline={true}
          onChangeText={text => {
            console.log({text});
            setDetails(text);
          }}>
          <Text>{details}</Text>
          {/* <Text style={{fontWeight: 'bold'}}>AAAAAAAAAA</Text>
          <Text>CCCCCCC</Text>
          <Text style={{textDecorationLine: 'underline'}}>BBBBBBBBBB</Text>
          <Text style={{fontWeight: 'bold'}}>AAAAAAAAAA</Text>
          <Text>CCCCCCC</Text>
          <Text style={{textDecorationLine: 'underline'}}>BBBBBBBBBB</Text> */}
        </TextInput>
      </View>
      <View style={styles.iconsContainer}>
        {ICONS.map(icon => {
          return (
            <IconButton
              name={icon.name}
              size={icon.size}
              family={icon.family}
              key={icon.name}
            />
          );
        })}
      </View>
    </View>
  );
};

export default NoteDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACE_LARGE,
  },
  inputContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONT_XLARGE,
    color: BLUE,
  },
  text: {
    flex: 1,
    fontSize: FONT_XLARGE,
    color: BLUE,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
