import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import {
  BORDER_SMALL,
  FONT_XLARGE,
  SPACE_LARGE,
  SPACE_MEDIUM,
} from '../../constants/LAYOUT';
import {BLUE} from '../../constants/COLORS';
import TemplateIcon from '../../components/TemplateIcon';
// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import NoteCard from '../../components/NoteCard';
import {CARDS} from '../../constants/CARDS';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchInput}>
        <TextInput
          style={styles.search}
          placeholder={'Search notes'}
          placeholderTextColor={`${BLUE}80`}
        />
        <TemplateIcon
          style={styles.icon}
          name="search"
          size={20}
          color={BLUE}
        />
      </View>
      <ScrollView>
        {CARDS.map(card => {
          return (
            <NoteCard
              title={card.title} // this is a property aka prop !!!!!
              description={card.description} // this is a property aka prop !!!!!
              color={card.color}
              id={card.id} // this is a property aka prop !!!!!
            />
          );
        })}
      </ScrollView>
      {/* <Pressable onPress={() => navigation.navigate('NoteDetails')}>
        <Text>Press</Text>
      </Pressable> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
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
  search: {
    fontSize: FONT_XLARGE,
    color: BLUE,
    marginLeft: SPACE_MEDIUM,
  },
  icon: {
    marginRight: SPACE_MEDIUM,
  },
});
