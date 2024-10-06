import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const NhanDonScreen = () => {
  return (
    <View>
      <View style={styles.viewScannerQR}>
        <QRCodeScanner
          onRead={this.onSuccess}
          flashMode={RNCamera.Constants.FlashMode.torch}
          topContent={
            <Text style={styles.centerText}>
              Go to{' '}
              <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
              your computer and scan the QR code.
            </Text>
          }
          bottomContent={
            <TouchableOpacity style={styles.buttonTouchable}>
              <Text style={styles.buttonText}>OK. Got it!</Text>
            </TouchableOpacity>
          }
        />
      </View>
      <View style={styles.viewListDataScanner}></View>
    </View>
  );
};

export default NhanDonScreen;
const styles = StyleSheet.create({
  viewScannerQR: {
    aspectRatio: 16 / 9,
    backgroundColor: 'red',
  },
  viewListDataScanner: {
    height: '100%',
    backgroundColor: 'red',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },

  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
