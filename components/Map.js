import React from "react"
import MapView from "react-native-maps"
import { StyleSheet, Dimensions } from "react-native"

const styles = StyleSheet.create({
    map: {
        height : Dimensions.get('window').height,
        width: Dimensions.get('window').width,
      }
})

export default () => {
    return (
        <MapView 
            style={StyleSheet.map}/>
    )
}

