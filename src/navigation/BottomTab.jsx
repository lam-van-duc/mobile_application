import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  DanhSachDonGiaoStackNavigator,
  NhanDonStackNavigator,
  TaiKhoanStackNavigator,
  TinhNangStackNavigator,
  TrangChuStackNavigator,
} from './MainStackNavigator';
import OcIcon from 'react-native-vector-icons/Octicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();
const TrangChu = color => <OcIcon name="home" size={25} color={color} />;
const DonGiao = color => (
  <MaterialIcon name="truck-delivery" size={25} color={color} />
);
const NhanDon = color => (
  <MaterialIcon name="cube-scan" size={25} color={color} />
);
const TinhNang = color => <OcIcon name="apps" size={25} color={color} />;
const TaiKhoan = color => <FeatherIcon name="user" size={25} color={color} />;

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Trang chủ">
      <Tab.Screen
        name="Trang chủ"
        component={TrangChuStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => TrangChu(color),
        }}
      />
      <Tab.Screen
        name="Đơn giao"
        component={DanhSachDonGiaoStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => DonGiao(color),
        }}
      />
      <Tab.Screen
        name="Nhận đơn"
        component={NhanDonStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => NhanDon(color),
        }}
      />
      <Tab.Screen
        name="Tính năng"
        component={TinhNangStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => TinhNang(color),
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={TaiKhoanStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => TaiKhoan(color),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabNavigator;
