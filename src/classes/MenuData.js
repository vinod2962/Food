import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  ActivityIndicator,
  Linking,
  TouchableOpacity,
  Image,
} from 'react-native';

export default function MenuData(props) {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoader(true);
    getDataAPI();
  }, []);

  const getDataAPI = async () => {
    const url =
      'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=078c217050f04aac847cf2cd2d7e9b85';
    let notification_Data = await fetch(url);
    notification_Data = await notification_Data.json();
    setData(notification_Data?.articles);
    setLoader(false);
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#EFF1EF',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#EFF1EF',
        }}>
        <Text
          style={{
            fontSize: 30,
            alignSelf: 'center',
          }}>
          Notifications
        </Text>
        <ActivityIndicator size={'small'} animating={loader} />
        {data ? (
          <FlatList
            data={data}
            renderItem={({item, index}) => (
              <View
                style={{
                  fontSize: 17,
                  marginTop: 10,
                  paddingHorizontal: 10,
                  borderWidth: 0.5,
                  borderColor: '#208C5A',
                  marginHorizontal: 5,
                  paddingVertical: 5,
                  borderRadius: 10,
                  backgroundColor: 'white',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Image
                    style={{
                      height: 150,
                      width: 150,
                    }}
                    source={{url: item.urlToImage}}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      width: 210,
                      paddingHorizontal: 10,
                      alignSelf: 'center',
                    }}>
                    {item.title}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => Linking.openURL(item.url)}>
                  <Text
                    style={{
                      color: 'blue',
                    }}>
                    {item.url}
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : null}

        {/* vinod */}
      </View>
    </SafeAreaView>
  );
}
