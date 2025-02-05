import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Desconectar',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="sign-out" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="VisualizarDatos"
        options={{
          title:'Visualizar Datos',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="eye" size={size} color={color} />
          ),
        }}
      />
   
    </Tabs>
  )
}


export default TabsLayout