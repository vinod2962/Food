import React from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ButtonComp from '../components/ButtonComp';
import CartItem from '../components/CartItems';

let array = [];
export default function Pizzas(props) {
  const cart = text => {
    if (text) {
      const newData = pizz.filter(item => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });
      if (array.some(el => el.name === text) === true) {
        Alert.alert('This email already taken by another account');
      } else {
        array.push(newData[0]);
        console.log(array);
        let str = JSON.stringify(array);
        AsyncStorage.setItem('myItems', str);
      }
    } else {
      null;
    }
  };

  const pizz = [
    {
      Image: require('../images/rolls1.png'),
      name: 'Veg. Roll',
      prize: '129',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/Cheese-Pizza.png'),
      name: 'Cheese Pizza',
      prize: '249',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/burger1.png'),
      name: 'Burger',
      prize: '79',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/rolls1.png'),
      name: 'Veg. Roll',
      prize: '129',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/Cheese-Pizza.png'),
      name: 'Cheese Pizza',
      prize: '249',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/burger1.png'),
      name: 'Burger',
      prize: '79',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/rolls1.png'),
      name: 'Veg. Roll',
      prize: '129',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/Cheese-Pizza.png'),
      name: 'Cheese Pizza',
      prize: '249',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/burger1.png'),
      name: 'Burger',
      prize: '79',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/rolls1.png'),
      name: 'Veg. Roll',
      prize: '129',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/Cheese-Pizza.png'),
      name: 'Cheese Pizza',
      prize: '249',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/burger1.png'),
      name: 'Burger',
      prize: '79',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/rolls1.png'),
      name: 'Veg. Roll',
      prize: '129',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/Cheese-Pizza.png'),
      name: 'Cheese Pizza',
      prize: '249',
      btn: 'Add to cart',
    },
    {
      Image: require('../images/burger1.png'),
      name: 'Burger',
      prize: '79',
      btn: 'Add to cart',
    },
  ];

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#EFF1EF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          //   justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
          <Image
            style={{
              height: 30,
              width: 25,
              tintColor: 'green',
              marginLeft: 10,
              //   marginTop: 10,
            }}
            source={require('../images/less.png')}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: 26,
            alignSelf: 'center',
            marginLeft: 110,
          }}>
          Pizza Lists
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          marginBottom: 30,
        }}>
        <View
          style={{
            paddingHorizontal: 13,
            borderRadius: 10,
            height: 760,
          }}>
          <FlatList
            style={{
              marginBottom: 30,
            }}
            data={pizz}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CartItem
                Image={item.Image}
                name={item.name}
                prize={item.prize}
                btn={item.btn}
                cart={text => cart(text)}
              />
            )}
          />
        </View>
        {/* <ButtonComp
                title="cart"
             /> */}
      </View>
    </SafeAreaView>
  );
}
