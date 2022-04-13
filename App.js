import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import MapView from 'react-native-maps';


const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height:3,
    }
  },
  map: {
    height : Dimensions.get('window').height,
    width: Dimensions.get.('window').width,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
      <Modal 
        animationType='slide'
        transparent= {true}
        visible={true}
      >
        <View style={styles.center}>
          <View style={styles.modalView}>
            <Text></Text>
          </View>        
        </View>
      </Modal>      
    </View>
  )
}


