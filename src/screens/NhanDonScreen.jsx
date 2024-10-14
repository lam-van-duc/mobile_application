import {SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useRef, useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import ListDataNhanDon from '../components/nhandon/ListDataNhanDon';

const NhanDonScreen = () => {
  const scannerRef = useRef(null);
  const [qrValue, setQrValue] = useState([]);

  const onSuccess = e => {
    if (e?.data) {
      setQrValue(prevQrValues => {
        // Kiểm tra xem giá trị đã tồn tại hay chưa
        if (!prevQrValues.includes(e?.data)) {
          // Nếu chưa tồn tại, thêm vào danh sách
          return [...prevQrValues, e?.data];
        }
        // Nếu đã tồn tại, trả về danh sách cũ không thay đổi
        return prevQrValues;
      });
    }

    setTimeout(() => {
      if (scannerRef.current) {
        scannerRef.current.reactivate(); // Kích hoạt lại scanner
      }
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerCameraScanner}>
        <QRCodeScanner
          cameraContainerStyle={styles.cameraContainerStyle}
          cameraStyle={styles.cameraStyle}
          ref={scannerRef}
          onRead={onSuccess}
          //flashMode={RNCamera.Constants.FlashMode.torch}
        />
      </View>
      <ListDataNhanDon
        qrValue={qrValue}
        onRemoveItem={data => {
          setQrValue(data);
        }}
      />
    </SafeAreaView>
  );
};

export default NhanDonScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  containerCameraScanner: {
    backgroundColor: '#3333',
    aspectRatio: 16 / 9,
  },
  cameraContainerStyle: {
    width: '100%',
    alignSelf: 'center',
  },
  cameraStyle: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
});
