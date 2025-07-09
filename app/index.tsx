import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const HomeScreen = () => {
  const [value, setValue] = useState(1)


  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: 'center' }}>

      <Text style={{ color: "black", fontSize: 40, fontWeight: "bold", marginTop: 40 }}>
        Calculator
      </Text>


      <View style={{ marginTop: 100, flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingHorizontal: 20, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            setValue(value - 1)
          }}
          style={{
            borderWidth: 1,
            padding: 20,
            borderRadius: 100,
            backgroundColor: 'gray'
          }}>
          <Text style={{ color: 'white', fontSize: 40 }}>-</Text>
        </TouchableOpacity>
        <Text style={{ color: 'black', fontSize: 40, fontWeight: 'bold' }}>{value}</Text>
        <TouchableOpacity
          onPress={() => {
            setValue(value + 1)
          }}
          style={{
            borderWidth: 1,
            padding: 20,
            borderRadius: 100,
            backgroundColor: 'gray'
          }}>
          <Text style={{ color: 'white', fontSize: 40 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}


export default HomeScreen;