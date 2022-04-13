import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components/Index';

const styles = StyleSheet.create({
  form: {
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  //HOOKs
  const [points, setPoints] = useState([])
  const [pointTemp, setPointTemp] = useState({})
  const [nombre, setNombre] = useState('')

  const [visivility, setVisivility] = useState(false) 
  const [visivilityFilter, setvisivilityFilter] = useState('new_point')//new_point or all_points
  const [pointsFilter, setPointsFilter] = useState(true)

  //FUNCTIONS
  const togglePointsFilter = () => {setPointsFilter(!pointsFilter)}

  const handleLongPress = ({ nativeEvent }) => {  
    setvisivilityFilter('new_point')
    setPointTemp(nativeEvent.coordinate)
    setVisivility(true)
  }

  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    const newPoint = {
      coordinate: pointTemp,
      name: nombre,
    }
    setPoints(points.concat(newPoint))
    setVisivility(false)
    setNombre('')   
  }

  const handleList = () => {
    setvisivilityFilter('all_points')
    setVisivility(true)
  }
  

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} points={points} pointsFilter={pointsFilter}/>
      <Panel txtLeft='Mostrar Lista' onPressLeft={handleList} togglePointsFilter={togglePointsFilter} />
        <Modal visivility={visivility}>
          {visivilityFilter === 'new_point'
            ?
            <View style={styles.form}>
              <Input title='Nombre' placeholder='Nombre del punto' onChangeText={handleChangeText}/>
              <Button title='Aceptar' onPress={handleSubmit}/> 
            </View>           
              : <List points={points} closeModal={() => setVisivility(false)}/>
          }     
        </Modal>
    </View>
  )
}


