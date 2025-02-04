import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';


const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Pantalla Inicio',
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="VisualizarDatos"
        options={{
          title:'Visualizar Datos',
        //   tabBarIcon: ({ color }) => <FontAwesome size={28} name="film" color={color} />,
        }}
      />
   
    </Tabs>
  )
}


export default TabsLayout