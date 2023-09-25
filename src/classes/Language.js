import React, {useEffect, useState} from 'react';
import {SafeAreaView, SectionList, View, Text, FlatList} from 'react-native';
import LanguageBox from '../components/LanguageBox';
// import en from '../language/en';
// import hi from '../language/hi';
// import I18n from 'react-native-i18n';
import AsyncStorage from '@react-native-community/async-storage';
import color from '../Constants/color';
import {StackActions, NavigationActions} from 'react-navigation';

// export default function Selection_List(props){

//     const DATA = [
//         {
//           title: 'Main dishes',
//           data: ['Pizza', 'Burger', 'Risotto'],
//         },
//         {
//           title: 'Sides',
//           data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//         },
//         {
//           title: 'Drinks',
//           data: ['Water', 'Coke', 'Beer'],
//         },
//         {
//           title: 'Desserts',
//           data: ['Cheese Cake', 'Ice Cream'],
//         },
//         {
//             title: 'Main dishes',
//             data: ['Pizza', 'Burger', 'Risotto'],
//           },
//           {
//             title: 'Sides',
//             data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//           },
//           {
//             title: 'Drinks',
//             data: ['Water', 'Coke', 'Beer'],
//           },
//           {
//             title: 'Desserts',
//             data: ['Cheese Cake', 'Ice Cream'],
//           },
//           {
//             title: 'Main dishes',
//             data: ['Pizza', 'Burger', 'Risotto'],
//           },
//           {
//             title: 'Sides',
//             data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//           },
//           {
//             title: 'Drinks',
//             data: ['Water', 'Coke', 'Beer'],
//           },
//           {
//             title: 'Desserts',
//             data: ['Cheese Cake', 'Ice Cream'],
//           },
//           {
//             title: 'Main dishes',
//             data: ['Pizza', 'Burger', 'Risotto'],
//           },
//           {
//             title: 'Sides',
//             data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//           },
//           {
//             title: 'Drinks',
//             data: ['Water', 'Coke', 'Beer'],
//           },
//           {
//             title: 'Desserts',
//             data: ['Cheese Cake', 'Ice Cream'],
//           },
//           {
//             title: 'Main dishes',
//             data: ['Pizza', 'Burger', 'Risotto'],
//           },
//           {
//             title: 'Sides',
//             data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//           },
//           {
//             title: 'Drinks',
//             data: ['Water', 'Coke', 'Beer'],
//           },
//           {
//             title: 'Desserts',
//             data: ['Cheese Cake', 'Ice Cream'],
//           },
//       ];
//     return(

//         <SafeAreaView>
//             <View
//             style={{
//                 marginHorizontal:12,
//                 marginTop:30
//             }}
//             >
//                 <SectionList
//                 sections={DATA}
//                 renderItem={({item})=><Text
//                 style={{
//                     fontSize:20
//                 }}
//                 >
//                     {item}
//                 </Text>}

//                 renderSectionHeader={({section})=>(
//                     <Text
//                     style={{
//                         fontSize:30,
//                         backgroundColor:"#208C5A",
//                         marginTop:10
//                     }}
//                     >{section.title}</Text>
//                 )}

//                 />
//             </View>
//         </SafeAreaView>
//     )
// }

export default function Language(props) {
  const [language, setLanguage] = useState('');

  const Llist = [
    {
      Language: 'English',
      code: 'en',
    },
    {
      Language: 'Hindi',
      code: 'hi',
    },
    {
      Language: 'French',
      code: 'fr',
    },
  ];

  useEffect(() => {
    getData();
  }, [action]);
  1;
  const getData = async () => {
    let Data = await AsyncStorage.getItem('languageSelected');
    setLanguage(Data);
    // console.log(Data);
  };

  const action = val => {
    AsyncStorage.setItem('languageSelected', val);
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: 'Splash'})],
    });
    props.navigation.dispatch(resetAction);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#EFF1EF',
      }}>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <Text
          style={{
            fontSize: 35,
            alignSelf: 'center',
          }}>
          Change Language
        </Text>
        <View
          style={{
            alignSelf: 'center',

            marginTop: 20,
          }}>
          <FlatList
            data={Llist}
            renderItem={({item, index}) => (
              <LanguageBox
                data={item}
                click={val => action(val)}
                tnColor={item.code == language ? 'red' : 'black'}
              />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
