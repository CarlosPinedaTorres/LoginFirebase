import { Text, View, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import GlobalStyles from "@/themes/GlobalStyles";
import CustomTextInput from "@/components/CustomTextInput";
export default function Index() {
  return (
    <View>
      <View>
        <CustomTextInput placeholder={"Introduce el usuario"} width={150} height={150} />
      </View>
      <View>
        <CustomTextInput placeholder={"Introduce la contraseña"} width={150} height={150} />
      </View>
      <Link href={"/drawer"} style={[GlobalStyles.linkButton]}>Login</Link>
      <Pressable ><Text>Registro</Text></Pressable>
    </View>
  );
}
