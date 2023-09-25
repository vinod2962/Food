import React from "react";
import { View, TouchableOpacity, Text } from "react-native";



export default function CartbuttonItem(props) {
    return (
        <View>
            <TouchableOpacity>
                <Text
                style={{
                    
                    backgroundColor:"#208C5A",
                    marginHorizontal:5,
                    paddingHorizontal:15,
                    paddingVertical:4,
                    borderRadius:10,
                    overflow:"hidden",
                    color:"white",
                    fontWeight:"700"
                }}>

                    {props.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}