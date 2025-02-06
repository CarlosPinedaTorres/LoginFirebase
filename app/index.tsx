import { Text, View, TextInput, Pressable ,Alert} from "react-native";
import { Link, router } from "expo-router";
import { StyleSheet } from "react-native";
import GlobalStyles from "@/themes/GlobalStyles";
import CustomTextInput from "@/components/CustomTextInput";
import { Colors } from "@/themes/Colors";
import { useState } from "react";
import { auth } from "@/Firebaseconfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { setParams } from "expo-router/build/global-state/routing";
export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logIn=async()=>{
    try{
      const user=await(signInWithEmailAndPassword(auth,email,password))
      if(user) router.replace("/tabs")
    }catch(error:any){
      console.log(error)
      Alert.alert("Inicio de sesion incorrecto",error)
    }
  }
  const register=async()=>{
    try{
      const user=await(createUserWithEmailAndPassword(auth,email,password))
      if(user) router.replace("/tabs")
    }catch(error:any){
      
      Alert.alert("Error al registrar el usuario", error)
    }
  }
  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={GlobalStyles.inputContainer}>
        <CustomTextInput placeholder="Introduce el correo"  value={email}  onChangeText={setEmail} width={300} height={50} />
      </View>
      
      <View style={GlobalStyles.inputContainer}>
        <CustomTextInput placeholder="Introduce la contraseña"  value={password} onChangeText={setPassword} width={300} height={50}  />
      </View>

    
  

      <Pressable onPress={logIn} style={GlobalStyles.linkButton}><Text style={styles.loginText}>Login</Text></Pressable>
      
      <Pressable onPress={register} style={[styles.registerBoton,{margin:15}]}><Text style={styles.registerText}>Registrar</Text></Pressable>
 
    </View>
  );
}

const styles = StyleSheet.create({
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.mostaza,
    marginBottom: 20,
  },

  loginText: {
    color: '#1C1C1E',
    fontSize:20,
    fontWeight: 'bold',
  },
  registerBoton: {
    marginTop: 10,
    borderColor: '#D4AF37',
    borderWidth: 2,
    width:'100%',
    maxWidth:300,
    backgroundColor:Colors.negro,
    height:50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign:"center",
  
  },
  registerText: {
    color: Colors.mostaza,
    fontSize: 20,
    fontWeight: 'bold',
  },
});