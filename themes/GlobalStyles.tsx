import { StyleSheet } from "react-native"
import { Colors } from "./Colors"
const GlobalStyles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.negro,
        padding: 16,
      },
    linkButton:{
        width:'100%',
        maxWidth:300,
        backgroundColor:Colors.mostaza,
        height:50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        textAlign:"center",
      
    },
    input: {
        backgroundColor: Colors.mostazaClaro,
        borderColor: Colors.mostaza,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: Colors.negro,
      },
      inputContainer: {
        width: '100%',
        alignContent:"center",
        alignItems:"center",
        marginBottom: 12,
      },
  
})
export default GlobalStyles