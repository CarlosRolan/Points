import React from "react"
import { StyleSheet, Dimensions, FlatList, Text, View, Button } from "react-native"

const styles = StyleSheet.create({
    button: {
        paddingBottom: 15,
    },
    list: {
        height: Dimensions.get('window').height - 150 
    },
    item: {      
        borderBottomWidth: 1,
        borderColor: '#ccc',
        height: 40,
        justifyContent: 'center',
        padding: 10,
    }
})

export default ({ points, closeModal }) => {
    console.log(points)
     return (
         <>
            <View style={styles.list}>
                <FlatList 
                    data={points.map(x => x.name)}
                    renderItem={({ item }) => <View style={styles.item}><Text>{ item }</Text></View>}
                    keyExtractor={item => item}
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Cerrar"
                    onPress={closeModal}/>
            </View>
        </>
     );
}