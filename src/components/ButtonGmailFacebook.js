import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonGmailFacebook(props) {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 40,
          width: 280,
          backgroundColor: 'white',
          borderRadius: 8,
          alignSelf: 'center',
          marginTop: 10,
          flexDirection: 'row',
          borderColor: '#208C5A',
          borderWidth: 0.5,
          justifyContent: 'center',

          // shadowColor: '#208C5A',
          // shadowOffset: { width: 2, height: 2 },
          // shadowRadius: 2,
          // shadowOpacity: 0.5
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 25,
              width: 25,
              alignSelf: 'center',
            }}
            source={props.Image}
          />
          <Text
            style={{
              fontSize: 15,
              alignSelf: 'center',
              marginLeft: 10,
            }}>
            {props.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
