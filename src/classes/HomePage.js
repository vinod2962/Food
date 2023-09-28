import React, {useState, useEffect} from 'react';
import {
  Alert,
  FlatList,
  SafeAreaView,
  ScrollView,
  ScrollViewComponent,
  Text,
  TouchableOpacity,
  View,
  contains,
  TextInput,
  Linking,
  BackHandler,
  addEventListener,
  Platform,
} from 'react-native';
import Home_page_Topbar from '../components/Home_page_Topbar';
import Search_Bar from '../components/Search_Bar';
import FoodType from '../components/FoodType';
import OfferList from '../components/OfferList';
import {SliderBox} from 'react-native-image-slider-box';

var srcData = [];
export default function HomePage(props) {
  useEffect(() => {
    value();
    ImageData();
  }, []);

  const ImageData = async () => {
    let y = await AsyncStorage.getItem('img');
    SetPic(y);
  };

  const [pic, SetPic] = useState('');

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Exit Application', 'Are you sure to exit the app', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => BackHandler.exitApp(),
          style: 'cancel',
        },
      ]);

      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
  });

  const [filterData, setFilterData] = useState([]);
  const [masterData, setmasterData] = useState([]);
  const [search, setsearch] = useState('');

  const value = () => {
    setFilterData(Itemlists);
    setmasterData(Itemlists);
  };

  const searchFilter = text => {
    if (text) {
      const newData = masterData.filter(item => {
        return item.name.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });

      setFilterData(newData);
      setsearch(text);
    } else {
      setFilterData(masterData);
      setsearch(text);
    }
  };

  const [selectCategory, setSelectedCategory] = useState(-1);
  const [location, setLocation] = useState('Select Location');

  const searchFilter1 = text => {
    if (text) {
      const newData = masterData.filter(item => {
        return item.keyId.toUpperCase().indexOf(text.toUpperCase()) > -1;
      });

      setFilterData(newData);
      setsearch(text);
    } else {
      setFilterData(masterData);
      setsearch(text);
    }
  };

  const location_arr = [
    'karnal',
    'kurukshtra',
    'chandigarh',
    'mohali',
    'panipat',
  ];

  const foodItems = [
    {foodtypes: 'Top of the week'},
    {foodtypes: 'Coffee'},
    {foodtypes: 'Sweet'},
    {foodtypes: 'Vegetarion'},
    {foodtypes: 'Chicken'},
  ];

  const images = [
    require('./../images/fImage2.jpeg'),
    require('./../images/fImage5.png'),
    require('./../images/fImage1.jpeg'),

    require('./../images/fImage3.jpeg'),
    require('./../images/fImage4.jpeg'),
  ];

  const Itemlists = [
    {
      name: 'Pizza',
      image: require('./../images/p1.png'),
      keyId: 'Top of the week',
    },
    {
      name: 'Biryani',
      image: require('./../images/biryani2.png'),
      keyId: 'Chicken',
    },
    {
      name: 'Italian',
      image: require('./../images/italian1.png'),
      keyId: 'Chicken',
    },
    {
      name: 'North Indian',
      image: require('./../images/northindian1.png'),
      keyId: 'Top of the week',
    },
    {
      name: 'Rolls',
      image: require('./../images/rolls1.png'),
      keyId: 'Vegetarion',
    },
    {
      name: 'Paratha',
      image: require('./../images/paratha1.png'),
      keyId: 'Top of the week',
    },
    {
      name: 'Burger',
      image: require('./../images/burger1.png'),
      keyId: 'Vegetarion',
    },
    {
      name: 'Cake',
      image: require('./../images/cake1.png'),
      keyId: 'Sweet',
    },
    {
      name: 'Coffee',
      image: require('./../images/coffee1.png'),
      keyId: 'Coffee',
    },
    {
      name: 'south Indian',
      image: require('./../images/southindian1.png'),
      keyId: 'Vegetarion',
    },
  ];

  const clickHere = val => {
    if (val == 'Pizza') {
      props.navigation.navigate('Pizzas');
    } else if (val == 'Biryani') {
      props.navigation.navigate('Biryanis');
    } else if (val == 'Italian') {
      props.navigation.navigate('Italians');
    } else if (val == 'North Indian') {
      props.navigation.navigate('North_Indian');
    } else if (val == 'Rolls') {
      props.navigation.navigate('Rolls');
    } else if (val == 'Paratha') {
      props.navigation.navigate('Paratha');
    } else if (val == 'Burger') {
      props.navigation.navigate('Burger');
    } else if (val == 'Cake') {
      props.navigation.navigate('Cake');
    } else if (val == 'Coffee') {
      props.navigation.navigate('Coffee');
    } else if (val == 'south Indian') {
      props.navigation.navigate('south_Indian');
    }
  };

  const _renderItem = ({item, index}) => {
    return (
      <FoodType
        foodtypes={item.foodtypes}
        color={index == selectCategory ? 'white' : 'black'}
        bg={index == selectCategory ? '#208C5A' : 'white'}
        index={index}
        cat_click={index => setSelectedCategory(index)}
        click_Me={text => searchFilter1(text)}
      />
    );
  };

  const _renderItem2 = ({item, index}) => (
    <OfferList
      name={item.name}
      image={item.image}
      // pageNext={item.pageNext}
      pizza_click={val => clickHere(val)}
    />
  );

  return (
    <SafeAreaView
      style={{
        // backgroundColor: '#208C5A',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#EFF1EF',
        }}>
        <Home_page_Topbar
          maps={() => props.navigation.navigate('Maps')}
          location={location}
          onClick={() => props.navigation.navigate('PersonalDetails')}
        />

        <Search_Bar
          holder="Search on Foo|Dzzzi"
          colors="black"
          onClick={() => searchFilter()}
          myDataS={text => searchFilter(text)}
          Search="Search"
        />
        <View
          style={{
            marginTop: 10,
          }}>
          <SliderBox
            images={images}
            dotColor="#208C5A"
            inactiveDotColor="white"
            autoplay={true}
            autoplayInterval={3000}
            circleLoop={true}
          />
        </View>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={foodItems}
          renderItem={_renderItem}
        />

        <FlatList
          style={{
            height: Platform.OS == 'ios' ? 393 : 374,
            backgroundColor: '#EFF1EF',
            marginTop: 10,
          }}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={filterData}
          renderItem={_renderItem2}
        />
      </View>
    </SafeAreaView>
  );
}
