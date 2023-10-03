import React, {useState, useRef, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ProfileDetails from '../components/ProfileDetails';
import Dialog, {DialogContent} from 'react-native-popup-dialog';
import RBSheet from 'react-native-raw-bottom-sheet';
import AsyncStorage from '@react-native-community/async-storage';

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

export default function UserProfile(props) {
  useEffect(() => {
    getData();
    ImageData();
  }, []);

  const ImageData = async () => {
    let y = await AsyncStorage.getItem('img');
    SetPic(y);
  };

  const [pic, SetPic] = useState('');

  const getData = async () => {
    let user_login = await AsyncStorage.getItem('user_login');
    let parsedata = JSON.parse(user_login);
    setUserName(parsedata);
  };

  const [userName, setUserName] = useState({});
  const [showDailog, setShowDailog] = useState(false);
  const refRBSheet = useRef(null);
  const refRBSheet1 = useRef(null);

  const userSide = [
    {
      title: I18n.t('your_profile'),
      Image: require('../images/profile1.png'),
      // NextPage:{navigate("PersonalDetails")}
    },
    {
      title: I18n.t('your_rating'),
      Image: require('../images/star1.png'),
    },
    {
      title: I18n.t('your_orders'),
      Image: require('../images/order2.png'),
    },
    {
      title: I18n.t('language'),
      Image: require('../images/fav1.png'),
    },
    {
      title: I18n.t('noticication'),
      Image: require('../images/notification1.png'),
    },
    {
      title: I18n.t('about'),
      Image: require('../images/about1.png'),
    },
    {
      title: I18n.t('setting'),
      Image: require('../images/setting1.png'),
    },
    {
      title: I18n.t('logout'),
      Image: require('../images/logout1.png'),
    },
  ];

  const clickMange = val => {
    if (val == I18n.t('your_profile')) {
      props.navigation.navigate('ProfileDetails');
    } else if (val == I18n.t('your_rating')) {
      refRBSheet1.current.open();
    } else if (val == I18n.t('your_orders')) {
      props.navigation.navigate('YourOrders');
    } else if (val == I18n.t('language')) {
      props.navigation.navigate('Language');
    } else if (val == I18n.t('noticication')) {
      props.navigation.navigate('MenuData');
    } else if (val == I18n.t('about')) {
      refRBSheet.current.open();
    } else if (val == I18n.t('setting')) {
      null;
    } else if (val == I18n.t('logout')) {
      setShowDailog(true);
    }
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#208C5A',
        flex: 1,
      }}>
      {/* <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
        <Image
          style={{
            height: 30,
            width: 25,
            tintColor: 'black',
            marginLeft: 10,
            marginTop: 10,
          }}
          source={require('../images/less.png')}
        />
      </TouchableOpacity> */}
      <View
        style={{
          marginTop: 30,
        }}>
        <Image
          style={{
            height: 120,
            width: 120,
            borderWidth: 1,
            borderRadius: 60,
            borderColor: 'white',
            alignSelf: 'center',
          }}
          source={{uri: pic}}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 28,
            fontWeight: '700',
            marginTop: 10,
          }}>
          {userName?.name}{' '}
        </Text>
      </View>
      <View
        style={{
          alignSelf: 'center',
          backgroundColor: '#EFF1EF',
          width: '100%',
          height: '100%',
          marginTop: 20,
          borderRadius: 60,
          paddingTop: 30,
        }}>
        <FlatList
          style={{
            height: 200,
          }}
          data={userSide}
          renderItem={({item, index}) => (
            <ProfileDetails
              title={item.title}
              Image={item.Image}
              listClickHandle={val => clickMange(val)}
              navigation={props.navigation}
              // NextPage={item.NextPage}
            />
          )}
        />
      </View>

      {/* Dailog popup  */}

      <View>
        <Dialog
          visible={showDailog}
          onTouchOutside={() => {
            setShowDailog(false);
          }}>
          <DialogContent>
            {showDailog ? (
              <View
                style={{
                  // height: 90,
                  width: 210,
                  justifyContent: 'space-evenly',
                }}>
                <Text
                  style={{
                    fontSize: 26,
                    paddingTop: 5,
                  }}>
                  Logout
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    paddingTop: 5,
                  }}>
                  Are you sure you want to logout?
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                  }}>
                  <TouchableOpacity onPress={() => setShowDailog(false)}>
                    <View>
                      <Text
                        style={{
                          fontSize: 23,
                          fontWeight: '400',
                          paddingTop: 10,
                        }}>
                        No
                      </Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      AsyncStorage.removeItem('status');
                      setShowDailog(false),
                        props.navigation.navigate('LoginPage');
                    }}>
                    <View>
                      <Text
                        style={{
                          fontSize: 23,
                          fontWeight: '400',
                          paddingTop: 10,
                        }}>
                        Yes
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ) : null}
          </DialogContent>
        </Dialog>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={400}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View>
            <Text
              style={{
                margin: 20,
              }}>
              This study examined consumers’ change in perception related to
              food delivery using big data before and after the COVID-19 crisis.
              This study identified words closely associated with the keyword
              “food delivery” based on big data from social media and
              investigated consumers’ perceptions of and needs for food delivery
              and related issues before and after COVID-19. Results were derived
              through analysis methods such as text mining analysis, Concor
              analysis, and sentiment analysis. The research findings can be
              summarized as follows: In 2019, frequently appearing
              dining-related words were “dining-out,” “delivery,” “famous
              restaurant,” “delivery food,” “foundation,” “dish,” “family
              order,” and “delicious.” In 2021, these words were “delivery,”
              “delivery food,” “famous restaurant, ” “foundation,” “COVID-19,”
              “dish,” “order,” “application,” and “family.” The analysis results
              for the food delivery sentimental network based on 2019 data
              revealed discourses revolving around delicious, delivery food,
              lunch box, and Korean food. For the 2021 data, discourses revolved
              around delivery food, recommend, and delicious. The emotional
              analysis, which extracted positive and negative words from the
              “food delivery” search word data, demonstrated that the number of
              positive keywords decreased by 2.85%, while negative keywords
              increased at the same rate. In addition, compared to the
              pre-COVID-19 pandemic era, a weakening trend in positive emotions
              and an increasing trend in negative emotions were detected after
              the outbreak of the COVID-19 pandemic; sub-emotions under the
              positive category (e.g., good feelings, joy, interest) decreased
              in 2021 compared to 2019, whereas sub-emotions under the negative
              category (e.g., sadness, fear, pain) increased.
            </Text>
          </View>
        </RBSheet>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}>
        <RBSheet
          ref={refRBSheet1}
          closeOnDragDown={true}
          closeOnPressMask={false}
          height={250}
          customStyles={{
            wrapper: {
              backgroundColor: 'transparent',
            },
            draggableIcon: {
              backgroundColor: '#000',
            },
          }}>
          <View
            style={{
              margin: 20,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '300',
                borderBottomColor: 'black',
                borderBottomWidth: 2,
              }}>
              Your Rating
            </Text>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Image
                style={{
                  height: 40,
                  width: 40,
                  margin: 10,
                  // tintColor:"yellow",
                }}
                source={require('../images/star.png')}
              />
              <Image
                style={{
                  height: 40,
                  width: 40,
                  margin: 10,
                }}
                source={require('../images/star.png')}
              />
              <Image
                style={{
                  height: 40,
                  width: 40,
                  margin: 10,
                }}
                source={require('../images/star.png')}
              />
              <Image
                style={{
                  height: 40,
                  width: 40,
                  margin: 10,
                }}
                source={require('../images/star.png')}
              />
              <Image
                style={{
                  height: 40,
                  width: 40,
                  margin: 10,
                }}
                source={require('../images/star.png')}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 30,
              }}>
              <TouchableOpacity
                onPress={() => {
                  refRBSheet1.current.close();
                }}>
                <Text>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </RBSheet>
      </View>
    </SafeAreaView>
  );
}
