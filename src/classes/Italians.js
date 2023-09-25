import React, { createContext, useEffect, useState } from "react";
import { Button, Image, Text } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from "@react-native-community/async-storage";


let x = "hello world"
const myContext = createContext();

export default function Italians(props) {

    const [pic, setPic] = useState("")

  

    const imageSel = async () => {
        const options = { mediaType: "photo" }
        const result = await launchImageLibrary(options)
        setPic(result.assets[0].uri)



    }

    return (
        <SafeAreaView>
            <myContext.Provider>
                <View>
                    <Text>hhhhhhhhh</Text>
                </View>
            </myContext.Provider>
            <View>
                <Image
                    style={{
                        alignSelf: "center",
                        marginTop: 20,
                        height: 300,
                        width: 300,
                        borderColor: "black",
                        borderWidth: 2,
                        borderRadius: 150
                    }}
                    source={{ uri: pic }} />


                <Button
                    title="Image"
                    onPress={imageSel}
                />
            </View>


        </SafeAreaView>
    )
}