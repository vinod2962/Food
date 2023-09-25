import React, { useContext, useEffect, useState } from "react";
import { View, SafeAreaView, Text, TouchableOpacity, Modal, TextInput } from "react-native";
import Tts from "react-native-tts";




export default function Coffee(props) {

const [text , setText]= useState("")
    const VoiceCreate=(()=>{
        Tts.speak(text)
    })
    return (
     
        
        <SafeAreaView>
            <View>
            <TextInput 
            style={{
                
            }}
              placeholder="Write here"
              onChangeText={(val)=>setText(val)}
              />

              <TouchableOpacity
              onPress={()=>VoiceCreate()}
              >
                <Text
                style={{
                    fontSize:20,
                    alignSelf:"center",
                    borderWidth:1,
                    borderColor:"black",
                    borderRadius:10,
                    paddingHorizontal:10,
                    paddingVertical:3,
                    marginTop:10

                }}
                >
                    VOICE
                </Text>
              </TouchableOpacity>

              
            </View>

         
        </SafeAreaView>
    )
}