import { View, Text,TextInput,TextInputProps } from 'react-native'
import React from 'react'
import GlobalStyles from '@/themes/GlobalStyles'

interface CustomInputProps extends TextInputProps{

    height?: number,
    width?:number,
   

}

// TextInputProps
const CustomTextInput:React.FC<CustomInputProps> = ({placeholder,height,width,onChangeText,value,...rest}) => {
  return (
    <TextInput
    value={value}
    onChangeText={onChangeText}
      placeholder={placeholder}
      style={[{ height, width ,fontSize:30},GlobalStyles.input]}
      {...rest}
    />
  )
}

export default CustomTextInput   
