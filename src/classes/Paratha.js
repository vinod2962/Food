import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Modal, Dimensions, Alert } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';



export default function Paratha(props) {


    return (


        <SafeAreaView>
            <View>
                

                <View>
                    <DateTimePicker


                        textColor="red"
                        // display="spinner"
                        style={{
                            width: "80%",
                            alignSelf:"center",
                            margin: 20,
                            // borderColor: "black",
                            // borderWidth: 1,
                            elevation:2

                        }}
                        date={new Date()}
                        mode="datetime"
                        value={new Date()}
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        // minDate="01-01-2016"
                        // maxDate="01-01-2019"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                //display: 'none',
                                position: 'absolute',
                                left: 20,
                                top:4,
                                marginLeft: 0,
                                //   textColor:"red"
                            },
                            dateInput: {
                                marginLeft: 36,
                            },
                        }}
                        onDateChange={date => {
                            setDate(date);
                        }}
                    />

                </View>

            </View>
            <View
            onMoveShouldSetResponder={
                Alert.alert("error","here")
            }
            >
                <Text>
                    gg
                </Text>
            </View>


        </SafeAreaView>
    )
}