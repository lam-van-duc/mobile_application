import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Geolocation from 'react-native-geolocation-service';
import Geolib from 'geolib';

const TaiKhoanScreen = () => {
  const [distance, setDistance] = useState(0);
  const [prevLocation, setPrevLocation] = useState(null);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const {latitude, longitude} = position.coords;
        if (prevLocation) {
          const distanceCovered = Geolib.getDistance(prevLocation, {
            latitude,
            longitude,
          });
          setDistance(distance + distanceCovered / 1000); // đổi sang km
        }
        setPrevLocation({latitude, longitude});
      },
      error => console.log(error),
      {enableHighAccuracy: true, distanceFilter: 1},
    );
    return () => Geolocation.clearWatch(watchId);
  }, [distance, prevLocation]);

  return <Text>Quãng đường đã đi: {distance.toFixed(2)} km</Text>;
  // return (
  //   <View>
  //     <Text>TaiKhoanScreen</Text>
  //   </View>
  // );
};

export default TaiKhoanScreen;
