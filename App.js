import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components/Index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

export default function App() {
  //HOOKs
  const [points, setPoints] = useState([])
  const [pointTemp, setPointTemp] = useState({})
  const [name, setName] = useState('')

  const [visivility, setVisivility] = useState(false)
  const [visivilityFilter, setvisivilityFilter] = useState('new_point')//new_point or all_points

  //FUNCTIONS
  const handleLongPress = ({ nativeEvent }) => {  
    setvisivilityFilter('new_point')
    setPointTemp(nativeEvent.coordinate)
    setVisivility(true)
  }

  const handleChangeText = text => {
    setName(text)
  }

  const handleSubmit = () => {
    const newPoint = {
      coordinate: pointTemp,
      name: name
    }
    setPoints(points.concat(newPoint))
    setVisivility(false)
    setName('')   
  }

  const handleList = () => {
    setvisivilityFilter('all_points')
    setVisivility(true)
  }
  

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress}/>
      <Panel txtLeft='Mostrar Lista' onPressLeft={handleList} />
        <Modal visivility={visivility}>
          {visivilityFilter === 'new_point'
            ?
            <>
              <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText}/>
              <Button title='Aceptar' onPress={handleSubmit}/> 
            </>           
              : <List points={points}/>
          }     
        </Modal>
    </View>
  )
}


