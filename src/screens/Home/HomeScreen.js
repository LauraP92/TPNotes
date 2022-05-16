import {StyleSheet, View, TextInput, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import {
  BORDER_SMALL,
  FONT_LARGE,
  FONT_XLARGE,
  SPACE_LARGE,
  SPACE_MEDIUM,
} from '../../constants/LAYOUT';
import {BLUE} from '../../constants/COLORS';
import TemplateIcon from '../../components/TemplateIcon';
import NoteCard from '../../components/NoteCard';
import {CARDS} from '../../constants/CARDS';
import AddButton from '../../components/AddButton';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import DeleteButton from '../../components/DeleteButton';
import TemplateText from '../../components/TemplateText';

const HomeScreen = ({navigation}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = CARDS.filter(card => {
    return (
      card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.search}
          placeholder={'Search notes'}
          placeholderTextColor={`${BLUE}80`}
          onChangeText={text => {
            setSearchTerm(text);
          }}
        />
        <TemplateIcon
          style={styles.icon}
          name="search"
          size={20}
          color={BLUE}
        />
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}>
        {filteredNotes.length === 0 ? (
          <View style={styles.noResultContainer}>
            <TemplateText
              style={styles.noResult}
              text={'Ooops, nothing found with this \n description...'}
            />
          </View>
        ) : (
          filteredNotes.map(card => {
            return (
              <NoteCard
                title={card.title} // this is a property aka prop !!!!!
                description={card.description} // this is a property aka prop !!!!!
                color={card.color}
                key={card.id}
                id={card.id}
                navigation={navigation}
              />
            );
          })
        )}
      </ScrollView>
      <AddButton />
      {/* <DeleteButton /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: BORDER_SMALL,
    borderColor: BLUE,
    justifyContent: 'space-between',
    borderRadius: 23,
    margin: SPACE_LARGE,
    height: 50,
  },
  scrollContainer: {
    flex: 1,
  },
  noResultContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  noResult: {
    color: BLUE,
    fontSize: FONT_LARGE,
    alignSelf: 'center',
    textAlign: 'center',
  },
  search: {
    fontSize: FONT_XLARGE,
    color: BLUE,
    marginLeft: SPACE_MEDIUM,
  },
  icon: {
    marginRight: SPACE_MEDIUM,
  },
});
