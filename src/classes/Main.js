import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import BottomTabe from '../components/BottomTabe';
import HomePage from './HomePage';
import UserProfile from './UserProfile';
import OfferScreen from './OfferScreen';
import CartScreen from './CartScreen';
import en from '../language/en';
import hi from '../language/hi';
import fr from '../language/fr';
import I18n from 'react-native-i18n';
I18n.fallback = true;

I18n.translations = {
  hi,
  en,
  fr,
};

export default function Main(props) {
  const [displayIndex, setDisplayIndex] = useState(0);
  const pages = [
    {
      title: I18n.t('home'),
      Image: require('../images/home1.png'),
      // path:props.navigation.navigate('HomePage')
    },
    {
      title: I18n.t('offers'),
      Image: require('../images/offer1.png'),
    },
    {
      title: I18n.t('cart'),
      Image: require('../images/cart1.png'),
    },
    {
      title: I18n.t('profile'),
      Image: require('../images/profile1.png'),
    },
  ];

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#EFF1EF',
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
