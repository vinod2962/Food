import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

export default function ProfileDetails(props) {
  const {listClickHandle, title} = props;
  // console.log('your profile', title);
  return (
    <View
      style={{
        height: 45,
        width: 340,
        borderColor: '#208C5A',
        borderWidth: 0.3,
        borderRadius: 10,
        marginTop: 8,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginBottom: 2,
      }}>
      <TouchableOpacity onPress={() => listClickHandle(title)}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 28,
                  width: 28,
                  tintColor: '#767B78',
                  marginLeft: 10,
                  marginTop: 8,
                }}
                source={props.Image}
              />

              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontWeight: '200',
                  paddingLeft: 10,
                  paddingTop: 9,
                }}>
                {' '}
                {props.title}
              </Text>
            </View>
          </View>

          <Image
            style={{
              height: 30,
              width: 30,
              tintColor: '#208C5A',
              marginRight: 7,
              marginTop: 8,
            }}
            source={require('../images/greater.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
