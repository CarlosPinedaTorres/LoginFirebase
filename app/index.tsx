import { Text, View, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import GlobalStyles from "@/themes/GlobalStyles";
import CustomTextInput from "@/components/CustomTextInput";
import { Colors } from "@/themes/Colors";
export default function Index() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={GlobalStyles.inputContainer}>
        <CustomTextInput placeholder="Introduce el usuario" width={300} height={50} />
      </View>
      
      <View style={GlobalStyles.inputContainer}>
        <CustomTextInput placeholder="Introduce la contraseña" width={300} height={50}  />
      </View>
      
      <Link href="/tabs" style={GlobalStyles.linkButton}>
        <Text style={styles.loginText}>Login</Text>
      </Link>
      
      <Pressable style={styles.registerBoton}>
        <Text style={styles.registerText}>Registro</Text>
      </Pressable>
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