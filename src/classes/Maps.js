import React, { useEffect, useRef, useState } from "react";

import { Alert, Button, Image, SafeAreaView, Text, View } from "react-native";

import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE, Polygon } from 'react-native-maps';
import Search_Bar from "../components/Search_Bar";
import GetLocation from "react-native-get-location";
import { getDistance, getPreciseDistance } from 'geolib';
// import * as geolib from 'geolib';

export default function Maps(props) {

  
  const mapRef = useRef(null)
  const [loc, setLoc] = useState(
    [
      {
        latitude: 30.7411,
        longitude: 76.7790
      },
      {
        latitude: 30.7191,
        longitude: 76.7487
      }
    ]
  );

  const [sourceLocation, setSourceLocation] = useState({
    latitude: 30.7411,
    longitude: 76.7790
  })

  const [destinationLocation, setDestinationLocation] = useState({
    latitude: 30.7191,
    longitude: 76.7487
  })





  const calculateDistance = () => {
    var dis = getDistance(
      sourceLocation,
      destinationLocation,
    );
    Alert.alert(
      `Distancen ${dis / 1000} KM`
    );


  };


  
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <MapView
        // provider={PROVIDER_GOOGLE}
        // tracksViewChanges={true}
        initialRegion={{
          latitude: 30.7191,
          longitude: 76.7487,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
        ref={mapRef}

        // showsUserLocation={true}
        // showsMyLocationButton={true}
        // followsUserLocation={true}
        // showsCompass={true}
        // scrollEnabled={true}
        // zoomEnabled={true}
        // pitchEnabled={true}
        // rotateEnabled={true}
        style={{ width: '100%', height: '100%' }}
      //onRegionChange={(e)=>setLoc(e)}


      >


        {
          console.log("test_", loc)
        }

        <Marker
          coordinate={sourceLocation}
          draggable
          onDragEnd={e => {
            setSourceLocation(e?.nativeEvent.coordinate)

            // const arr=[...loc]
            // loc[0].latitude=e?.nativeEvent.coordinate?.latitude
            // loc[0].longitude=e?.nativeEvent.coordinate?.longitude
            // setLoc(arr)
            // console.log(arr)

          }}
        />

        <Marker
          coordinate={destinationLocation}
          draggable
          onDragEnd={e => {
            setDestinationLocation(e?.nativeEvent.coordinate)
            
            // const arr=[...loc]
            // loc[1].latitude=e?.nativeEvent.coordinate?.latitude
            // loc[1].longitude=e?.nativeEvent.coordinate?.longitude
            // setLoc(arr)
          }}
        />



        <Button
          title="Distance"
          onPress={() => calculateDistance()}
        />


      </MapView>
    </SafeAreaView>
  )
}