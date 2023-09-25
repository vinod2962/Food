import React from "react";
import { Text, View }from "react-native";

export default function PersonalUserDetails(props){

    return(
        <View
        style={{
            alignSelf:"center",
            marginTop:5
        }}
        >
            <Text
            style={{
                fontSize:18,
                fontWeight:"300",
                color:"#484A4A"
                
            }}
            >
               {props.title}
            </Text>
            <Text
            style={{
                borderWidth:0.5,
                borderColor:"#208C5A",
                height:"auto",
                width:360,
                fontSize:17,
                alignItems:"center",
                paddingLeft:10,
                paddingTop:8,
                backgroundColor:"white",
                marginTop:5,
                borderRadius:5,
                overflow:"hidden",
                paddingBottom:5
            
            }}
            >
                {props.info}
            </Text>
        </View>
    )
}