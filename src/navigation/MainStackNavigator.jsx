import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import GiaoHangScreen from '../screens/GiaoHangScreen';
import NhanDonScreen from '../screens/NhanDonScreen';
import TinhNangScreen from '../screens/TinhNangScreen';
import TaiKhoanScreen from '../screens/TaiKhoanScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#074cfa',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const options = title => ({
  headerTitleAlign: 'center',
  title: title, // Sử dụng tham số title
  headerTitleStyle: {
    fontSize: 18, // Cỡ chữ của tiêu đề
    fontWeight: 'bold', // Đậm
    textAlign: 'center', // Căn giữa tiêu đề
  },
});
const TrangChuStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={options('Trang chủ')}
      />
    </Stack.Navigator>
  );
};

const NhanDonStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="NhanDon"
      screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="NhanDon"
        component={NhanDonScreen}
        options={options('Nhận đơn giao hàng')}
      />
    </Stack.Navigator>
  );
};

const DanhSachDonGiaoStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="GiaoHang"
      screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="GiaoHang"
        component={GiaoHangScreen}
        options={options('Giao hàng')}
      />
    </Stack.Navigator>
  );
};

const TinhNangStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TinhNang"
      screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="TinhNang"
        component={TinhNangScreen}
        options={options('Tính năng')}
      />
    </Stack.Navigator>
  );
};

const TaiKhoanStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TaiKhoan"
      screenOptions={screenOptionStyle}>
      <Stack.Screen
        name="TaiKhoan"
        component={TaiKhoanScreen}
        options={options('Tài khoản')}
      />
    </Stack.Navigator>
  );
};
export {
  TrangChuStackNavigator,
  DanhSachDonGiaoStackNavigator,
  NhanDonStackNavigator,
  TaiKhoanStackNavigator,
  TinhNangStackNavigator,
};
