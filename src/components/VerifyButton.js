import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ButtonComp from "./ButtonComp";

export default function VerifyButton(props) {

    return (
        <View
            style={{
                alignItems: "center",
            }}>

                <TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: "#208C5A",
                    borderRadius: 10,
                    paddingVertical: 10,
                    paddingLeft: 20,
                    width: 281,
                    marginTop: 10
                }}>
                <Image
                    style={{
                        height: 40,
                        width: 40,
                        marginTop: 2,
                        tintColor: "black"
                    }} source={props.Image}/>
                <View
                    style={{
                        flexDirection: "column",
                        paddingLeft:10
                    }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "400"
                        }}>{props.title}</Text>

                    <Text
                        style={{
                            fontSize: 15,
                            color: "#CBCFCD",
                            fontWeight: "400"
                        }}>{props.text1}</Text>
                </View>
            </View>

            </TouchableOpacity>


        </View>
    )
}