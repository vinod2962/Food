import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

export default function OfferLists(props) {

    return (

        <View
            style={{
                height:Dimensions.get('screen').height/7,
                width:"100%",
                borderColor: "#208C5A",
                backgroundColor: "white",
                margin:5,
                // borderBottomEndRadius: 20,
                // borderTopRightRadius: 20,
                borderWidth: 0.7,
                borderRadius: 20,
              
            }}>
            <View
                style={{
                    flexDirection: "row"
                }}>

                <Image
                    style={{
                        height:"90%",
                        width: "35%",
                        resizeMode: 'stretch',

                    }}
                    source={props.Image} />
                <View>
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "500",
                            padding: 1,
                            color: "#000000",
                            alignSelf: "center",
                            // backgroundColor:"yellow"

                        }}> {props.shopName}
                    </Text>
                    <Text
                        style={{
                            height: 65,
                            width: 160,
                            // borderWidth:1,
                            borderColor: "black",
                            fontSize: 18,
                            paddingLeft: 3,
                            color: "#424141",
                            marginTop: 3,
                            alignSelf: "center",
                            // backgroundColor:"yellow"

                        }}>{props.offerAdd}
                    </Text>

                    <View
                        style={{
                            shadowColor: "#208C5A",
                            shadowOffset: { width:2, height: 2 },
                            shadowRadius: 3,
                            shadowOpacity: 0.5,
                            
                          
                        }}
                    >
                        <TouchableOpacity>
                            <Text
                                style={{
                                    borderWidth: 0.5,
                                    alignSelf: "center",
                                    paddingVertical: 4,
                                    paddingHorizontal: 10,
                                    borderRadius: 10,
                                    backgroundColor: "#208C5A",
                                    overflow: "hidden",
                                    color: "white",
                                    alignSelf:"flex-start"
                                }}>
                                Order now
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </View>
    )
}