import { View, Text, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalStyles from '@/themes/GlobalStyles'
import { Colors } from '@/themes/Colors'
import CustomTextInput from '@/components/CustomTextInput'
import { auth, db } from '@/Firebaseconfig'
import { addDoc, collection,deleteDoc,doc,getDocs, query } from '@firebase/firestore'
const VisualizarDatos = () => {
  const user=auth.currentUser
  const [tareas, setTareas] = useState<any>([])
  const [tarea, setTarea] = useState <any>()
  const coleccionTareas=collection(db,'tareas')
  useEffect(() => {
    cargarDatos()
  }, [user])
  
  const cargarDatos=async()=>{
    if(user){
      const q=query(coleccionTareas)
      const datos=await getDocs(q)
      setTareas(datos.docs.map((doc)=>({...doc.data(),id:doc.id})))
      
      console.log(tareas)
    }
  }

  const addTarea=async()=>{
    if(user){
      await addDoc(coleccionTareas,{tarea,finalizada:false})
      setTarea('')
      cargarDatos()
    }else{
      console.log("Error al añadir una tarea")
    }
  }

  const borrarTarea=async (id:string)=>{
      const referenciaTarea=doc(coleccionTareas,id)
      await (deleteDoc(referenciaTarea))
      console.log("Tarea elimina: "+referenciaTarea)
      cargarDatos()
  }


  return (
    <View style={GlobalStyles.container}>
       <View style={[GlobalStyles.inputContainer,{flex:1}]}>
        <CustomTextInput placeholder="Buscar"  value={tarea}  onChangeText={setTarea} width={300} height={50} />
        <Pressable onPress={addTarea}><Text>Añadir tarea</Text></Pressable>
        </View>  
          <FlatList data={tareas}
          keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View>
                <Text style={[{color:Colors.mostazaClaro}]}>{item.tarea}</Text>
                <Pressable onPress={()=>borrarTarea(item.id)} ><Text>Eliminar Tarea</Text></Pressable>
              </View>
            )}
                      
          />
        </View>
  )
}

export default VisualizarDatos