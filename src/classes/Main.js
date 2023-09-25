import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import BottomTabe from '../components/BottomTabe';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import OfferScreen from './OfferScreen';
import CartScreen from './CartScreen';

export default function Main(props) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const pages = [
    {
      title: 'Home',
      Image: require('../images/home1.png'),
      // path:props.navigation.navigate('HomePage')
    },
    {
      title: 'Offers',
      Image: require('../images/offer1.png'),
    },
    {
      title: 'Cart',
      Image: require('../images/cart1.png'),
    },
    {
      title: 'Profile',
      Image: require('../images/profile1.png'),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        {displayIndex == 0 ? (
          <HomePage navigation={props.navigation} />
        ) : displayIndex == 1 ? (
          <OfferScreen navigation={props.navigation} />
        ) : displayIndex == 2 ? (
          <CartScreen />
        ) : displayIndex == 3 ? (
          <UserProfile navigation={props.navigation} />
        ) : null}
      </View>

      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          borderRadius: 30,
        }}>
        {pages.map((item, index) => {
          return (
            <BottomTabe
              title={item.title}
              Image={item.Image}
              index={index}
              displayIndex={displayIndex}
              tabClick={val => {
                setDisplayIndex(val);
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
