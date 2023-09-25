import React ,{useState,useEffect}from "react";
import { SafeAreaView, Text, View, FlatList } from "react-native"
import CartItems from "../components/CartItems";
import PromoCode from "../components/PromoCode";
import PaymentDetails from "../components/PaymentDetails";
// import ButtonComp from "../components/ButtonComp";
import ButtonCart from "../components/ButtonCart";
import AsyncStorage from "@react-native-community/async-storage";


let array = []
export default function CartScreen(props) {

    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        let users = await AsyncStorage.getItem('myItems');
        let parsedata = JSON.parse(users);
        array = [...parsedata];
     
        setMyItems(array)
       
    };


    const _renderItem_Items_Add = ({item,index}) => {
        return (
            <CartItems
            Image={item.Image}
            name={item.name}
            prize={item.prize}
            btn='delete'

            />

        )
    }
    return (
        <SafeAreaView
            style={{
                backgroundColor: "#EFF1EF",
                // backgroundColor: "#208C5A",
                flex: 1

            }}>
            {/* <View
                style={{
                    backgroundColor: "#EFF1EF",
                    
                }}
            > */}
            <View
                style={{
                    marginHorizontal: 15,
                }}>

                <View>
                    <Text
                        style={{
                            fontSize: 25,
                            paddingTop: 20
                        }}>
                        Your Food cart
                    </Text>
                </View>
                <View
                    style={{
                        paddingTop: 20
                    }}
                />
                    <FlatList
                        horizontal={false}

                        showsVerticalScrollIndicator={false}

                        data={myItems}
                        renderItem={_renderItem_Items_Add}
                    />

                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        alignSelf: "center",
                        paddingTop: 20
                    }}>

                    <PromoCode />

                </View>
                <View
                    style={{
                        marginTop: 30
                    }}
                >
                    <PaymentDetails />
                </View>
                <ButtonCart
                    title="Procced to Checkout  "
                />
         
            {/* </View> */}
        </SafeAreaView>
    )
}