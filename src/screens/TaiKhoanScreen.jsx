import {Text, View, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';

const TaiKhoanScreen = () => {
  const [distance, setDistance] = useState(0);
  const [prevLocation, setPrevLocation] = useState(null);
  const [watch, setWatch] = useState(null);
  const [error, setError] = useState(null);

  const StartWatch = () => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(position.coords);
        if (prevLocation) {
          const distanceCovered = haversine(
            prevLocation,
            {
              latitude,
              longitude,
            },
            {unit: 'km'},
          );
          setDistance(distance + distanceCovered); // đổi sang km
        }
        setPrevLocation({latitude, longitude});
      },
      error => setError(error),
      {
        enableHighAccuracy: true,
        distanceFilter: 1,
        accuracy: 5,
        fastestInterval: 5000,
        // forceLocationManager: true,
        // forceRequestLocation: true,
        //interval: 5000,
        showLocationDialog: true,
        showsBackgroundLocationIndicator: true,
        //useSignificantChanges: true,
      },
    );
    setWatch(watchId);
  };

  const EndWatch = () => {
    console.log('end');
    Geolocation.clearWatch(watch);
  };

  return (
    <View>
      <Text>Watch: {watch}</Text>
      <Text>
        Lat, log: {prevLocation?.latitude} - {prevLocation?.longitude}
      </Text>
      <Text>Quãng đường đã đi: {distance.toFixed(2)} km</Text>
      <Text>Error: {error}</Text>
      <Button
        title="Bắt đầu"
        onPress={() => {
          StartWatch();
        }}></Button>
      <Button
        title="Kết thúc"
        onPress={() => {
          EndWatch();
        }}></Button>
    </View>
  );
  // return (
  //   <View>
  //     <Text>TaiKhoanScreen</Text>
  //   </View>
  // );
};

export default TaiKhoanScreen;
