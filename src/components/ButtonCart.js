import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function ButtonCart(props) {


    return (
      
        <View
            style={{
                height: 40,
                width: 280,
                backgroundColor: "#208C5A",
                borderRadius: 8,
                alignSelf: "center",
                marginTop: 20,
                shadowColor: 'black',
                shadowOffset: { width: 5, height: 5 },
                shadowRadius: 5,
                shadowOpacity: 0.3
            }}>
            <Text
                style={{
                    color: "white",
                    fontSize: 17,
                    alignSelf: "center",
                    paddingTop: 9,
                    fontWeight: "400"
                }}>
                {props.title}
            </Text>
        </View>
   
    )
}