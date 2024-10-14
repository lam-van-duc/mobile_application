// ./screens/About.js

import React, {useEffect, useRef, useState} from 'react';
import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';

const GiaoHangScreen = () => {
  const [barcodeValue, setBarcodeValue] = useState('');

  const onBarcodeRead = e => {
    console.log('Barcode value:', e.data);
    setBarcodeValue(e.data); // Lưu giá trị mã vạch vào state
  };
  const [coordinates, setCoordinates] = useState([]);
  const mapRef = useRef(null);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCoordinates([
          {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        ]);

        setCoordinates([
          {
            latitude: 21.017315,
            longitude: 105.84121,
          },
        ]);
        console.log(coordinates);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  const onMapReady = () => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates(coordinates, {
        edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
        animated: true,
      });
    }
  };

  async function requestLocationPermission() {
    let permission;

    if (Platform.OS === 'android') {
      permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    } else {
      permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    }

    const result = await check(permission);

    if (result === RESULTS.DENIED) {
      const newPermission = await request(permission);
      if (newPermission === RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        console.log('Permission denied');
      }
    } else if (result === RESULTS.GRANTED) {
      getCurrentLocation();
    } else if (result === RESULTS.BLOCKED) {
      console.log(
        'Permission is blocked. Ask the user to manually enable it in settings.',
      );
    }
  }

  useEffect(() => {
    requestLocationPermission();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height: '100%', width: '100%'}}>
        <MapView
          ref={mapRef}
          initialRegion={{
            latitude: 21.017315,
            longitude: 105.84121,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          //onMapReady={onMapReady} // Đảm bảo map đã sẵn sàng
          style={{flex: 1}}
        />
        <Marker
          key={1}
          coordinate={{
            latitude: 21.017315,
            longitude: 105.84121,
          }}
          title={'Lê duẩn'}
          description={'T test thôi'}
        />
      </View>
    </SafeAreaView>

    // <View style={styles.container}>
    //   {/* <RNCamera
    //     style={styles.preview}
    //     type={RNCamera.Constants.Type.back}
    //     onBarCodeRead={onBarcodeRead} // Gọi hàm khi quét mã vạch thành công
    //     flashMode={RNCamera.Constants.FlashMode.auto}
    //   /> */}
    //   {/* {barcodeValue ? (
    //     <Text style={styles.barcodeText}>Barcode Value: {barcodeValue}</Text>
    //   ) : (
    //     <Text style={styles.instructionText}>Scan a barcode</Text>
    //   )} */}

    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  barcodeText: {
    fontSize: 18,
    color: 'green',
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default GiaoHangScreen;
