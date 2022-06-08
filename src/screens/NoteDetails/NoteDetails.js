import {StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {FONT_XLARGE, SPACE_LARGE} from '../../constants/LAYOUT';
import {BLUE, GREEN} from '../../constants/COLORS';
import IconButton from '../../components/IconButton';
import DeleteNoteButton from '../../components/DeleteNoteButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NoteDetails = ({route, navigation}) => {
  const id = route?.params?.id;

  const [notes, setNotes] = useState([]);
  console.log({notes});
  const [currentNote, setCurrentNote] = useState({
    id: Date.now(),
    title: '',
    details: '',
    color: GREEN,
  });

  useEffect(() => {
    navigation.setOptions({
      // headerStyle: {
      //   backgroundColor: color,
      // },
      headerRight: () => {
        return <DeleteNoteButton />;
      },
    });
  }, []);

  const storeData = async (key, value) => {
    console.log({key, value});
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      console.log({jsonValue});
      const parsedValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      return parsedValue;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    (async () => {
      const storedNotes = await getData('notes');
      if (storedNotes) {
        setNotes(storedNotes);
      }
      if (id && storedNotes) {
        const storedCurrentNote = storedNotes.find(item => item.id === id);
        setCurrentNote(storedCurrentNote);
      }
    })();
  }, []);

  useEffect(() => {
    const filteredNotes = notes.filter(note => note.id !== currentNote.id);
    const newNotes = [currentNote, ...filteredNotes];
    setNotes(newNotes);
  }, [currentNote]);

  useEffect(() => {
    storeData('notes', notes);
  }, [notes]);

  const ICONS = [
    {
      name: 'format-color-fill',
      family: 'MaterialCommunityIcons',
      size: 40,
      onPress: () => {},
    },
    {
      name: 'bold',
      family: 'FontAwesome5',
      size: 30,
      onPress: () => {},
    },
    {
      name: 'italic',
      family: 'Feather',
      size: 30,
      onPress: () => {},
    },
    {
      name: 'format-underline',
      family: 'MaterialCommunityIcons',
      size: 35,
      onPress: () => {},
    },
    {
      name: 'check-square',
      family: 'Feather',
      size: 35,
      onPress: () => {
        console.log('Hey!');
      },
    },
  ];

  return (
    // <View style={[styles.container, {backgroundColor: color}]}>
    <View style={[styles.container]}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.title}
          placeholder={'Title (optional)'}
          placeholderTextColor={`${BLUE}80`}
          onChangeText={text => {
            setCurrentNote({
              id: currentNote.id,
              title: text,
              details: currentNote.details,
              color: currentNote.color,
            });
            console.log(text);
          }}
          value={currentNote.title}
        />
        <TextInput
          style={styles.text}
          placeholder={'Type details here'}
          placeholderTextColor={`${BLUE}80`}
          multiline={true}
          onChangeText={text => {
            setCurrentNote({
              id: currentNote.id,
              title: currentNote.title,
              details: text,
              color: currentNote.color,
            });
          }}
          value={currentNote.details}
        />
      </View>
      <View style={styles.iconsContainer}>
        {ICONS.map(icon => {
          return (
            <IconButton
              name={icon.name}
              size={icon.size}
              family={icon.family}
              key={icon.name}
              onPress={icon.onPress}
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
