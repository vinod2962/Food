import React from "react";
import { Text, TextInput, TouchableOpacity, View }from "react-native";

export default function PromoCode(){

    return(


        <View
         style={{
            flexDirection:"row",
            alignItems:"center",
            alignSelf:"center",
         
         }}>
  
            <TextInput
            placeholder="Prome Code"

            style={{
                height:40,
                width:240,
                borderColor:"#208C5A",
                borderWidth:0.4,
                borderRadius:5,
                paddingLeft:10


            }}
            />
            <TouchableOpacity
            style={{
                borderWidth:2,
                borderColor:"#208C5A",
                paddingHorizontal:20,
                paddingVertical:8,
                marginLeft:8,
                borderRadius:5,
                backgroundColor:"#208C5A",
                
            
            }}
            >
            <Text
            style={{
                color:"white",
                fontSize:16,
                fontWeight:"700"
            }}
            >
                Apply
            </Text>
            </TouchableOpacity>
       
        </View>
    )
}