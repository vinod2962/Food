import React from 'react';
import {Image, Linking, Text, TouchableOpacity, View} from 'react-native';

export default function Home_page_Topbar(props) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#208C5A',
        paddingTop: 5,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 5,
      }}>
      <View style={{}}>
        <TouchableOpacity
          onPress={props.maps}
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 26,
              width: 25,
              marginTop: 5,
            }}
            source={require('./../images/location3.png')}
          />

          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              paddingTop: 11,
              paddingLeft: 7,
            }}>
            {props.location}
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => props.onClick()}>
        <Image
          style={{
            height: 35,
            width: 35,
            // marginTop: 0,
            // marginRight: 0,
            borderRadius: 17.5,
          }}
          source={require('./../images/user1.jpeg')}
        />
      </TouchableOpacity>
    </View>
  );
}
