import { StyleSheet, View, TextInput} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

interface SearchbarProps {
  searchText: string,
  setSearchText: (text: string) => void;
}

export default function Searchbar(props: SearchbarProps) {
  return (
    
      <View style={styles.conatiner}>
        <AntDesign name="search1" size={24} color="grey" />
        <TextInput style={styles.searchInput} placeholder='Search' placeholderTextColor={"grey"} onChangeText={props.setSearchText} />
      </View>
  )
}

const styles = StyleSheet.create({
  conatiner: {
    borderWidth: 1,
    width: "98%",
    padding: 5,
    flexDirection: "row",
    backgroundColor: "#fae3eb",
    borderRadius: 15,
    marginTop: 10
  },
  searchInput: {
    marginLeft: 5,
    width: "90%",
  }
})