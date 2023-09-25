import React from "react";
import { Text, View } from "react-native";


export default function PaymentDetails() {

    return (
        <View
            style={{
                width: "100%",
                borderColor: "#208C5A",
                borderWidth:0.1,
                height: 150,
                paddingTop:5,
                paddingHorizontal:15

            }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical:4
                }}>
         
                <Text
                style={{
                    fontSize:16,
                    fontWeight:"300",
                    color:"#686767",
                }}
                >
                    Cart total
                </Text>
                <Text>
                    Rs. 457.00
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical:4
                }}
            >
                  <Text
                style={{
                    fontSize:16,
                    fontWeight:"300",
                    color:"#686767",
                }}
                >
                    Tax
                </Text>
                <Text>
                    Rs. 82.26
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical:4
                }}
            >
                 <Text
                style={{
                    fontSize:16,
                    fontWeight:"300",
                    color:"#686767",
                }}
                >
                    Delivery
                </Text>
                <Text>
                    Rs.43.73
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical:4
                }}
            >
                  <Text
                style={{
                    fontSize:16,
                    fontWeight:"300",
                    color:"#686767",
                }}
                >
                    Promo discount
                </Text>
                <Text>
                    Rs.00.00
                </Text>
            </View>
    
            <View
                style={{
                    borderWidth: 0.5,
                    borderBottomColor: "gray"
                }}>
         

            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical:5
                }}
            >
                   <Text
                style={{
                    fontSize:16,
                    fontWeight:"300",
                    color:"#686767",
                }}
                >
                    Subtotal
                </Text>
                <Text>
                    Rs.582.99
                </Text>
            </View>
        </View>
    )
}