import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from "react-native";
import css from "../stylesheets/css";
import ButtonComp from "../components/ButtonComp";

export default function Verify_Code(props) {

    return (

        <SafeAreaView>
            <View

                style={{
                    alignSelf: 'center',
                    // paddingHorizontal: 40,
                    marginTop: 60,
                    paddingHorizontal: 40

                }}>
                <Text
                    style={css.vc_1_Text}
                >
                    Verification code
                </Text>

                <Text
                    style={css.vc_2_Text}
                >
                    Please enter the code we just send to your selected option
                </Text>
            </View>

            <View
                style={{
                    flexDirection: "row",
                    alignSelf: "center",
                    marginTop: 20
                }}
            >

                <TextInput
                    style={css.otpCode}
                />
                <TextInput
                    keyboardType="number-pad"
                    maxLength={1}
                    style={css.otpCode}
                />
                <TextInput
                    style={css.otpCode}
                />
                <TextInput
                    style={css.otpCode}
                />
            </View>

            <View>
               
                    <ButtonComp
                        title="Verify"
                    />
                

                <ButtonComp
                    title="Cancel"

                />
            </View>
        </SafeAreaView>
    )
}