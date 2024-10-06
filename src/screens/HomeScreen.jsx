import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      {/* Sử dụng navigation để điều hướng đến màn hình About */}
      <Button
        title="Go to DonGiao Screen"
        onPress={() => navigation.navigate('DonGiao')} // Thay 'About' bằng tên màn hình bạn muốn điều hướng đến
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default HomeScreen;
