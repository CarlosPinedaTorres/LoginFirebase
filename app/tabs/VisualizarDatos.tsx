import { View, Text } from 'react-native'
import React from 'react'
import GlobalStyles from '@/themes/GlobalStyles'
import { Colors } from '@/themes/Colors'

const VisualizarDatos = () => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={{color:Colors.mostaza}}>Datos de la base de datos</Text>
    </View>
  )
}

export default VisualizarDatos