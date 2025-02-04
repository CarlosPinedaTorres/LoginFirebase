import { View, Text,Pressable } from 'react-native'
import { Link, useRouter } from 'expo-router'
import React from 'react'

const index = () => {
  const router=useRouter();
  const logout=()=>{
    router.push("/")
  }
  return (
    <View>
      <Text>Desconectarse</Text>
      <Pressable onPress={logout}>Cerrar sesion</Pressable>

    </View>
  )
}

export default index