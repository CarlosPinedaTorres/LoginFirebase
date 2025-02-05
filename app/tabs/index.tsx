import { View, Text,Pressable ,StyleSheet} from 'react-native'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import GlobalStyles from '@/themes/GlobalStyles';
import { Colors } from '@/themes/Colors';
const index = () => {
  const router=useRouter();
  const logout=()=>{
    router.push("/")
  }
  return (
    <View style={GlobalStyles.container}>
      <Text style={[GlobalStyles.linkButton,styles.text]}>Desconectarse</Text>
      <Pressable style={styles.registerBoton}>
            <Text style={styles.logOutText}>Cerrar Sesion</Text>
          </Pressable>

    </View>
  )
}

const styles=StyleSheet.create({
  text:{
    margin:20,
    color: Colors.negro,
    fontSize: 20,
    fontWeight: 'bold',
  },
   registerBoton: {
      width:'100%',
      maxWidth:300,
      backgroundColor:Colors.mostaza,
      height:50,
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      textAlign:"center",
    
    },
    logOutText: {
      color: Colors.negro,
      fontSize: 20,
      fontWeight: 'bold',
    },
})

export default index