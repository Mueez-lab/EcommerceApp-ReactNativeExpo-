import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CategoriesProps{
    item:string,
    selectedCategory:string,
    setSelectedCategory:(text:string) => void 
}


export default function Categories(props:CategoriesProps) {
  return (
    <TouchableOpacity style={{marginTop:10}} onPress={()=>props.setSelectedCategory(props.item)}>
            <Text style={[styles.category , props.selectedCategory===props.item && {color:"white" , backgroundColor:"#f71966"} ]}>{props.item} </Text>
    </TouchableOpacity>
  )
}



const styles = StyleSheet.create({
    category:{
        margin:5,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:"#d4d2d2",
        color:"#828181",
        borderRadius:15,
        borderColor:"pink",
        overflow: 'hidden',
        fontWeight:"600"
    }
})