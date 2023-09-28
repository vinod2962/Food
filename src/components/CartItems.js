import React from 'react';

import {Image, Text, View, TouchableOpacity} from 'react-native';
import CartbuttonItem from '../components/CartbuttonItem';

export default function CartItem(props) {
  return (
    <View
      style={{
        height: 90,
        width: '100%',
        borderWidth: 0.1,
        borderColor: '#208C5A',
        marginVertical: 2,
        borderRadius: 5,
        backgroundColor: '#FDFCFC',
      }}>
      <View
        style={{
          height: '50%',
          width: 70,
          //   borderWidth: 0.3,
          //   borderColor: 'black',
          // borderRadius: 5,
          //   marginTop: 15,
          marginLeft: 20,
          flexDirection: 'row',
          backgroundColor: 'white',
          // alignItems:"center"
        }}>
        <Image
          source={props.Image}
          style={{
            resizeMode: 'stretch',
            height: '100%',
            width: '100%',
            marginTop: 20,
          }}
        />
        <View
          style={{
            marginLeft: 20,
            // borderWidth:2,
            // borderColor:"black",
            width: 225,
            height: 45,
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: '500',
            }}>
            {props.name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#0A3F5C',
              fontWeight: '400',
              paddingTop: 3,
            }}>
            Rs. {props.prize}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginRight: 10,
        }}>
        {/* <CartbuttonItem
                    title="Add"
                /> */}
        <TouchableOpacity onPress={() => props.cart(props.name)}>
          <Text
            style={{
              backgroundColor: '#208C5A',
              marginHorizontal: 5,
              paddingHorizontal: 15,
              paddingVertical: 4,
              borderRadius: 10,
              overflow: 'hidden',
              color: 'white',
              fontWeight: '700',
            }}>
            {props.btn}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
