import { View, Text } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Profile = () => {
    const navigation =useNavigation();
    const handleLogout=async()=>{
      try{
           await AsyncStorage.removeItem('Login')
           navigation.navigate('Login')
      }
      catch(error){
        console.log(error)
      }
    }
  return (
    <View>
      <Text>Profile</Text>
      <Button title='Logout' onPress={handleLogout}/>
    </View>
  )
}

export default Profile