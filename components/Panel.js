import React from "react"
import { StyleSheet, Dimensions, Button, View } from "react-native"

const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#eee',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ( {onPressLeft, txtLeft } ) => {
    return (
        <View style={styles.panel}>
            <Button title={txtLeft} onPress={onPressLeft} />
            <Button title="Mostrar/Ocultar"/>
        </View>
    )
}

