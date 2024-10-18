import { StyleSheet, Text, View, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react'

export default function Header() {
  return (
    <View  style={styles.container}>
        <View style={styles.appIconContainer}>
            <Ionicons name="apps" size={30} color="#ff4284" />
        </View>
        <View>
            <Image style={styles.avatarIcon} source={require('../../assets/images/avatar.jpg')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    appIconContainer:{
        width:46,
        height:44,
        borderRadius:44,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#fae3eb"
    },
    avatarIcon:{
        width:50,
        height:50,
        borderRadius:50
    }
})