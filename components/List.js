import React from "react"
import { StyleSheet, Dimensions, FlatList, Text } from "react-native"

export default ({ points }) => {
    console.log(points)
     return (
        <FlatList 
            data={points.map(x => x.name)}
            renderItem={({ item }) => <Text>{ item }</Text>}
            keyExtractor={item => item}
        />
     );
}