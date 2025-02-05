import { View, Text,TextInput } from 'react-native'
import React from 'react'
import GlobalStyles from '@/themes/GlobalStyles'

interface Props{
    placeholder:string,
    height?: number,
    width?:number,
}

const CustomTextInput = ({placeholder,height,width}:Props) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={[{ height, width ,fontSize:30},GlobalStyles.input]}
    />
  )
}

export default CustomTextInput