import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.root}>
      <Octicons name='search' size={34} color='black' style={styles.icon} />
      <TextInput
        autoCorrect={false}
        autoCapitalize='none'
        placeholder='Search'
        style={styles.inputStyles}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#f0eeee',
    height: 50,
    borderRadius: 8,
    margin: 15,
    flexDirection: 'row'
  },
  icon: {
    alignSelf: 'center',
    marginHorizontal: 15
  },
  inputStyles: {
    flex: 1,
    fontSize: 18
  }
})

export default SearchBar
