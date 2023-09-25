import React from "react";
import { Text, SafeAreaView, View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import ButtonComp from "../components/ButtonComp";
import CartItem from "../components/CartItems";

let array = []
export default function Pizzas(props) {
    const cart = (text) => {
        if (text) {
            const newData = pizz.filter((item) => {
                return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
            })
            if (array.some(el => el.name === text) === true) {
                Alert.alert('This email already taken by another account');
            } else {
                array.push(newData[0]);
                console.log(array);
                let str = JSON.stringify(array);
                AsyncStorage.setItem('myItems', str);
            }

        } else {
            null
        }
    }


    const pizz = [
        {
            Image: require("../images/rolls1.png"),
            name: "Veg. Roll",
            prize: "129",
            btn: "Add to cart"
        },
        {
            Image: require("../images/Cheese-Pizza.png"),
            name: "Cheese Pizza",
            prize: "249",
            btn: "Add to cart"
        },
        {
            Image: require("../images/burger1.png"),
            name: "Burger",
            prize: "79",
            btn: "Add to cart"
        },
        {
            Image: require("../images/rolls1.png"),
            name: "Veg. Roll",
            prize: "129",
            btn: "Add to cart"
        },
        {
            Image: require("../images/Cheese-Pizza.png"),
            name: "Cheese Pizza",
            prize: "249",
            btn: "Add to cart"
        },
        {
            Image: require("../images/burger1.png"),
            name: "Burger",
            prize: "79",
            btn: "Add to cart"
        },
        {
            Image: require("../images/rolls1.png"),
            name: "Veg. Roll",
            prize: "129",
            btn: "Add to cart"
        },
        {
            Image: require("../images/Cheese-Pizza.png"),
            name: "Cheese Pizza",
            prize: "249",
            btn: "Add to cart"
        },
        {
            Image: require("../images/burger1.png"),
            name: "Burger",
            prize: "79",
            btn: "Add to cart"
        },
        {
            Image: require("../images/rolls1.png"),
            name: "Veg. Roll",
            prize: "129",
            btn: "Add to cart"
        },
        {
            Image: require("../images/Cheese-Pizza.png"),
            name: "Cheese Pizza",
            prize: "249",
            btn: "Add to cart"
        },
        {
            Image: require("../images/burger1.png"),
            name: "Burger",
            prize: "79",
            btn: "Add to cart"
        },
        {
            Image: require("../images/rolls1.png"),
            name: "Veg. Roll",
            prize: "129",
            btn: "Add to cart"
        },
        {
            Image: require("../images/Cheese-Pizza.png"),
            name: "Cheese Pizza",
            prize: "249",
            btn: "Add to cart"
        },
        {
            Image: require("../images/burger1.png"),
            name: "Burger",
            prize: "79",
            btn: "Add to cart"
        },

    ]

    return (
        <SafeAreaView
            style={{
                backgroundColor: "#EFF1EF"
            }}
        >


            <View
                style={{
                    marginTop: 20,
                    marginBottom: 30
                }}>

                <Text
                    style={{
                        fontSize: 26,
                        // alignItems:"center"
                        alignSelf: "center",
                    }}>
                    Pizza Lists
                </Text>
                <View
                    style={{
                        marginTop: 20,
                        backgroundColor: "#208C5A",
                        paddingHorizontal: 13,
                        borderRadius: 30,
                        height:730

                    }}
                >
                    <FlatList
                        style={{
                            marginVertical: 30,

                        }}
                        data={pizz}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (

                            <CartItem
                                Image={item.Image}
                                name={item.name}
                                prize={item.prize}
                                btn={item.btn}
                                cart={(text) => cart(text)}
                            />
                        )}




                    />
                    
                </View>
                {/* <ButtonComp
                title="cart"
             /> */}
                        </View>
        </SafeAreaView>
    )
}