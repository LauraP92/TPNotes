import {StyleSheet, View, TextInput} from 'react-native';
import React from 'react';
import {
  BORDER_SMALL,
  FONT_XLARGE,
  SPACE_LARGE,
  SPACE_MEDIUM,
} from '../../constants/LAYOUT';
import {BLUE} from '../../constants/COLORS';
import TemplateIcon from '../../components/TemplateIcon';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

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
