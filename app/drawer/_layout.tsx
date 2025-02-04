import { DrawerItem } from '@react-navigation/drawer';
import { Drawer} from 'expo-router/drawer';

import React from 'react';



const LayoutDrawer = () => {
  return (
    <Drawer 
        screenOptions={{
            overlayColor: 'rgba(0,0,0,0.4)',
            drawerInactiveTintColor: 'black',
            drawerActiveBackgroundColor: 'indigo',
            drawerActiveTintColor: 'white',
            drawerItemStyle: {
                borderRadius: 10
            }
        }}>
    <Drawer.Screen
        name="index"
        options={{
            drawerLabel:"Pantalla Principal",
            headerTitle:"Pantalla Principal"
        }}
    />
     <Drawer.Screen
        name="VisualizarDatos"
        options={{
            drawerLabel:"VisualizarDatos",
            headerTitle:"VisualizarDatos"
        }}
    />

   
  </Drawer>
  )
}

export default LayoutDrawer