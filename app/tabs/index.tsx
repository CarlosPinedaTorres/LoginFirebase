import { View, Text,Pressable ,StyleSheet} from 'react-native'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import GlobalStyles from '@/themes/GlobalStyles';
import { Colors } from '@/themes/Colors';
import { getAuth, signOut } from '@firebase/auth';
import { auth } from '@/Firebaseconfig';
const index = () => {
  const router=useRouter();

    getAuth().onAuthStateChanged((user)=>{
      if(!user) router.replace('/')
    })
  const logout=()=>{
    router.push("/")
  }


  return (
    <View style={GlobalStyles.container}>
       <Pressable style={GlobalStyles.linkButton} onPress={()=>auth.signOut()}>
            <Text style={styles.text}>Cerrar Sesion</Text>
        </Pressable>

    </View>
  )
}

const styles=StyleSheet.create({
  text:{
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