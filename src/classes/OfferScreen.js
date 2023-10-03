import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  FlatList,
  toUpperCase,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import OfferLists from '../components/OfferLists';
import Search_Bar from '../components/Search_Bar';
import FoodType from '../components/FoodType';

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

export default function OfferScreen(props) {
  useEffect(() => {
    value();
  }, []);

  const [filterData, setFilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  const value = () => {
    setFilterData(offers);
    setmasterData(offers);
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        return item.shopName.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });

      setFilterData(newData);
      setsearch(text);
    } else {
      setFilterData(masterData);
      setsearch(text);
    }
  };

  const [offerSelectCategory, setOfferSelectedCategory] = useState(-1);

  const searchFilter1 = text => {
    if (text) {
      const newData = masterData.filter(item => {
        return item.keyId.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });

      setFilterData(newData);
    } else {
      setFilterData(masterData);
    }
  };

  const offers = [
    {
      Image: require('../images/offer41.png'),
      shopName: "Wendy's",
      offerAdd: 'Buy 1 Get 1 Free on Chesse Blast Burgers',
      keyId: I18n.t('Buy_1_get_1'),
    },
    {
      Image: require('../images/offer31.png'),
      shopName: 'La-Pino,s Pizza',
      offerAdd: "Pizza's & more at Rs.149 only",
      keyId: I18n.t('only_rs_149'),
    },

    {
      Image: require('../images/offer15.png'),
      shopName: 'GetAway',
      offerAdd: 'Flat 20% OFF on Ice creams & more',
      keyId: I18n.t('_20_off'),
    },

    {
      Image: require('../images/offer21.png'),
      shopName: 'The Biryani Life',
      offerAdd: "Buy 1 Get 1 Free on Biryani's & more",
      keyId: I18n.t('Buy_1_get_1'),
    },

    {
      Image: require('../images/offer23.png'),
      shopName: 'Caterspoint',
      offerAdd: 'Buy 1 Get 1 Free on Sandwiches, salads & more',
      keyId: I18n.t('Buy_1_get_1'),
    },

    {
      Image: require('../images/offer24.png'),
      shopName: 'The burger King',
      offerAdd: 'Burger & Sides at Rs.129 only',
      keyId: I18n.t('only_rs_129'),
    },

    {
      Image: require('../images/offer27.png'),
      shopName: 'Great Indian Khichdi',
      offerAdd: 'Everything at Rs.149 only',
      keyId: I18n.t('only_rs_149'),
    },

    {
      Image: require('../images/offer41.png'),
      shopName: "Wendy's",
      offerAdd: 'Buy 2 Get 1 Free on Chesse Blast Burgers',
      keyId: I18n.t('Buy_2_get_1'),
    },
    {
      Image: require('../images/offer31.png'),
      shopName: 'La-Pino,s Pizza',
      offerAdd: "Pizza's & more at Rs.149 only",
      keyId: I18n.t('only_rs_149'),
    },

    {
      Image: require('../images/offer15.png'),
      shopName: 'GetAway',
      offerAdd: 'Flat 40% OFF on Ice creams & more',
      keyId: I18n.t('_40_off'),
    },

    {
      Image: require('../images/offer21.png'),
      shopName: 'The Biryani Life',
      offerAdd: "Buy 1 Get 1 Free on Biryani's & more",
      keyId: I18n.t('Buy_1_get_1'),
    },

    {
      Image: require('../images/offer23.png'),
      shopName: 'Caterspoint',
      offerAdd: 'Buy 1 Get 1 Free on Sandwiches, salads & more',
      keyId: I18n.t('Buy_1_get_1'),
    },

    {
      Image: require('../images/offer24.png'),
      shopName: 'The burger King',
      offerAdd: 'Burger & Sides at Rs.129 only',
      keyId: I18n.t('only_rs_129'),
    },

    {
      Image: require('../images/offer27.png'),
      shopName: 'Great Indian Khichdi',
      offerAdd: 'Everything at Rs.149 only',
      keyId: I18n.t('only_rs_149'),
    },

    {
      Image: require('../images/offer27.png'),
      shopName: 'Great Indian Khichdi',
      offerAdd: 'Flat 50% OFF on any Items',
      keyId: I18n.t('_50_off'),
    },
  ];

  const foodItemsoffer = [
    {foodtypes: I18n.t('Buy_1_get_1')},
    {foodtypes: I18n.t('_20_off')},
    {foodtypes: I18n.t('_40_off')},
    {foodtypes: I18n.t('only_rs_149')},
    {foodtypes: I18n.t('Buy_2_get_1')},
    {foodtypes: I18n.t('_50_off')},
    {foodtypes: I18n.t('only_rs_129')},
  ];

  const _renderItem = ({item, index}) => {
    return (
      <FoodType
        foodtypes={item.foodtypes}
        bg={index == offerSelectCategory ? '#208C5A' : '#fff'}
        color={index == offerSelectCategory ? '#fff' : '#000000'}
        index={index}
        cat_click={val => setOfferSelectedCategory(val)}
        click_Me={text => searchFilter1(text)}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        // backgroundColor: '#208C5A',
      }}>
      <View
        style={
          {
            //   flex: 1,
          }
        }>
        <View
          style={{
            // marginTop: 10,
            paddingTop: 5,
            paddingBottom: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#208C5A',
          }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '400',

              color: 'black',
              paddingLeft: 10,

              paddingBottom: 10,
              paddingRight: 10,
            }}>
            {I18n.t('todays_offers')}
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('MenuData')}>
            <Image
              style={{
                tintColor: 'white',
                height: 27,
                width: 27,
                marginTop: 5,
                marginRight: 15,
                overflow: 'visible',
              }}
              source={require('../images/notification.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: '#EFF1EF',
          }}>
          <View>
            <Search_Bar
              holder={I18n.t('shopm_name')}
              colors="black"
              onClick={() => searchFilter()}
              myDataS={text => searchFilter(text)}
              Search={I18n.t('search')}
            />
          </View>
          <View
            style={{
              marginTop: 5,
              // backgroundColor:"#208C5A"
            }}>
            {/* <Text>{offerSelectCategory}</Text> */}
            <ScrollView>
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={foodItemsoffer}
                renderItem={_renderItem}
              />
            </ScrollView>
          </View>

          <View
            style={{
              //   marginHorizontal: '2%',
              //   width: 400,
              alignItems: 'center',
              // paddingBottom:0,
              backgroundColor: '#EFF1EF',
              paddingTop: 5,
              borderRadius: 0,
              // marginTop: 20
              // paddingTop: 20
              // backgroundColor: 'red',
            }}>
            <FlatList
              style={{
                paddingBottom: 1,
                height: Platform.OS == 'ios' ? 600 : 575,
              }}
              showsVerticalScrollIndicator={false}
              data={filterData}
              renderItem={({item, index}) => {
                return (
                  <OfferLists
                    Image={item.Image}
                    shopName={item.shopName}
                    offerAdd={item.offerAdd}
                    order_now={I18n.t('order_now')}
                  />
                );
              }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
