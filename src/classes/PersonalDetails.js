import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Image, FlatList, Button } from "react-native";
import PersonalUserDetails from "../components/PersonalUserDetails";
import AsyncStorage from "@react-native-community/async-storage";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { request,PERMISSIONS} from 'react-native-permissions';

export default function PersonalDetails(props) {



    const [pic, SetPic] = useState('')


    const ImageData = async () => {
        let y = await AsyncStorage.getItem("img")
        SetPic(y)
    }

    const camera = async () => {
        const options = { mediaType: "photo" }
        const result = await launchImageLibrary(options);
        // console.log(result.assets[0].uri)
        AsyncStorage.setItem("img", result.assets[0].uri)
        ImageData();



    }

    const [userName, setUserName] = useState({})


    useEffect(() => {
        getData();
        ImageData();
    }, [])

    const getData = async () => {

        let user_login = await AsyncStorage.getItem('user_login');
        let parsedata = JSON.parse(user_login);
        setUserName(parsedata)
    }

    const dataUser = [
        {
            title: "Your Name",
            info: userName?.name
        },
        {
            title: "Your Gender ",
            info: userName?.gender
        },
        {
            title: "Your Address",
            info: "abc"
        },

        {
            title: "Your Phone Number",
            info: userName?.phone
        },
        {
            title: "Your Email",
            info: userName?.email
        },

    ]


    return (
        <SafeAreaView
            style={{
                backgroundColor: "#EFF1EF"
            }}>

            <View
                style={{
                    marginHorizontal: 20
                }}
            >
                <View>

                    <Image
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 100,
                            alignSelf: "center",
                            marginTop: 10,
                            backgroundColor: "black"



                        }}
                        source={{ uri: pic }}
                    />
                    <Button title="click" onPress={camera}></Button>
                </View>

                <View
                    style={{
                        marginTop: 30
                    }}
                >

                    {
                        dataUser.map((item, index) => {
                            return (
                                <PersonalUserDetails
                                    title={item.title}
                                    info={item.info}
                                // navigation={props.navigation}
                                />
                            )
                        })
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}