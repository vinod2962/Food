import React from 'react';
import {
  Dimensions,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Search_Bar(props) {
  const {onClick} = props;
  return (
    <View
      style={{
        marginTop: 8,
        alignSelf: 'center',
        flexDirection: 'row',
      }}>
      <TextInput
        onChangeText={props.myDataS}
        placeholder={props.holder}
        placeholderTextColor={'grey'}
        style={{
          borderWidth: 0.7,
          borderColor: '#208C5A',
          fontSize: 17,
          paddingVertical: 6,
          width: Dimensions.get('screen').width * 0.77,
          borderRadius: 5,
          paddingLeft: 10,
          fontWeight: '300',
          backgroundColor: 'white',
        }}></TextInput>

      <TouchableOpacity onPress={() => onClick()}>
        {props.Search ? (
          <Text
            style={{
              fontSize: 17,
              fontWeight: '400',
              paddingLeft: 10,
              paddingTop: Platform.OS == 'ios' ? 7 : 10,
              color: props.colors,
            }}>
            {props.Search}
          </Text>
        ) : null}
      </TouchableOpacity>
    </View>
  );
}

{
  /* <View>

<View >
{
    index==1?
    <Hom1e/>
    :
    index==2?
    <Home2/>
    :
    index==3?
    <Home3/>
    :
    index==4?
    <Home4/>
    :
    null
}
</View>


<View>

    <Text style={{
        color:index==0?red:black
    }}>HELLO</Text>

<Text style={{
        color:index==1?red:black
    }}>ABC</Text>

<Text style={{
        color:index==2?red:black
    }}>df</Text>

<Text style={{
        color:index==3?red:black
    }}>dgv</Text>

</View>

</View> */
}
