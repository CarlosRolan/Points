import React from "react"
import { StyleSheet, Modal, View, Text } from "react-native"

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
        },
    }
}
)

export default () => {
    return (
    <Modal 
        animationType='slide'
        transparent= {true}
        visible={true}
    >
        <View style={styles.center}>
          <View style={styles.modalView}>
            <Text>:)</Text>
          </View>        
        </View>
      </Modal>  
    )
}

