import React, { useState } from "react";
import { Button, TouchableOpacity } from "react-native";
import { Text, SafeAreaView, View } from "react-native";
import Dialog, { DialogContent } from 'react-native-popup-dialog';


export default function Try() {

    const [showDailog, setShowDailog] = useState(false)

    return (
        <SafeAreaView>
            <View>
                <Text>hlo</Text>

                <Button
                    title="click here"
                    onPress={() => { setShowDailog(true) }}
                />



                <Dialog
                    visible={showDailog}
                    onTouchOutside={() => {
                        setShowDailog(false);
                    }}>
                    <DialogContent>
                        {showDailog ? (
                            <View>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        paddingTop: 10,
                                        borderBottomWidth: 2,

                                    }}
                                >Log out</Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        paddingTop: 5
                                    }}
                                >Are you sure you want to log out?</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        paddingTop:10,
                                        justifyContent:"space-evenly",
                                        
                                    }}
                                >
                                    <TouchableOpacity>
                                        <Text>No</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>Yes</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        ) : null}
                    </DialogContent>
                </Dialog>
            </View>



        </SafeAreaView>
    )
}