import React from "react";
import { Image, Linking, Text, TouchableOpacity, View } from "react-native";

export default function Home_page_Topbar(props) {




    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                backgroundColor: '#208C5A',
                paddingTop: 10,
                paddingBottom: 2,
                paddingHorizontal: 20,
            }}>
            <View
            // style={{
            //     flexDirection: 'row',
            // }}
            >
                <TouchableOpacity
                    onPress={props.maps}
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Image
                        style={{
                            height: 26,
                            width: 25,
                            marginBottom: 6
                        }}
                        source={require('./../images/location3.png')} />

                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: '400',
                            paddingTop: 8,
                            paddingLeft: 7
                        }}>{props.location}
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={() => props.onClick()}
            >
                <Image
                    style={{
                        height: 40,
                        width: 40,
                        // marginTop: 0,
                        // marginRight: 0,
                        borderRadius: 20

                    }}
                    source={require('./../images/user1.jpeg')} /></TouchableOpacity>
        </View>
    )
}

