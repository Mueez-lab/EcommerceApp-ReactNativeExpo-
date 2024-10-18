import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from '@expo/vector-icons/AntDesign';
import HomeScreen from '@/src/screen/HomeScreen'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();


function Home()
{
    return(
        <View>
            <Text>
                Hi
            </Text>
        </View>
    )
}
function Home1()
{
    return(
        <View>
            <Text>
                Hi
            </Text>
        </View>
    )
}
function Home2()
{
    return(
        <View>
            <Text>
                Hi
            </Text>
        </View>
    )
}
function Home3()
{
    return(
        <View>
            <Text>
                Hi
            </Text>
        </View>
    )
}


export default function index() {
  return (
    <>
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarShowLabel: false,
        tabBarIconStyle:{
        },
        tabBarActiveTintColor: '#0375ad',
        tabBarInactiveTintColor:'#f71665'
    }}>
        <Tab.Screen name='HOME' component={HomeScreen} options={{
            tabBarIcon:({color, size, focused})=>{
                return(
                    <AntDesign name="home" size={size} color={color} />
                )
            }
        }}/>
        <Tab.Screen name='REORDER' component={Home1} options={{
            tabBarIcon:({color, size, focused})=>{
                return(
                    <FontAwesome name="reorder" size={size} color={color} />
                )
            }
        }}/>
        <Tab.Screen name='CART' component={Home2} options={{
            tabBarIcon:({color, size, focused})=>{ 
                return(
                    <FontAwesome name="opencart" size={size} color={color} />
                )
            },
        }}/>
        <Tab.Screen name='ACCOUNT' component={Home3} options={{
            tabBarIcon:({color, size, focused})=>{
                return(
                    <AntDesign name="user" size={size} color={color} />
                )
            }
        }}/>
    </Tab.Navigator>
    </>
  )
}