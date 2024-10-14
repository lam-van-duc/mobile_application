import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLOR_DEFAULT} from '../app/ColorApp';

const ListDataNhanDon = ({qrValue, onRemoveItem}) => {
  const handleRemoveItem = index => {
    onRemoveItem(qrValue.filter((_, i) => i !== index));
  };
  return (
    <View style={styles.actionScanner}>
      <View style={styles.dataScanner}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {qrValue.map((value, index) => (
            <View style={styles.itemData}>
              <Text key={index} style={styles.textData}>
                {value}
              </Text>
              <TouchableOpacity
                activeOpacity={0.85}
                style={styles.itemDataButton}
                onPress={() => handleRemoveItem(index)}>
                <Text style={{color: 'white', fontSize: 13}}>Bỏ lại</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonNhanDonContainer}>
        <TouchableOpacity style={styles.buttonNhanDon} activeOpacity={0.85}>
          <Text style={styles.textButton}>Nhận đơn</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default ListDataNhanDon;
const styles = StyleSheet.create({
  actionScanner: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#ddd',
  },
  dataScanner: {
    flex: 1,
    paddingVertical: 15,
  },
  itemData: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    // Bóng trên iOS
    shadowColor: '#000', // Màu của bóng
    shadowOffset: {width: 0, height: 2}, // Độ lệch của bóng
    shadowOpacity: 0.25, // Độ trong suốt của bóng
    shadowRadius: 3.84, // Độ mờ của bóng
    // Bóng trên Android
    elevation: 5, // Độ cao của bóng trên Android
  },
  textData: {flex: 1, fontWeight: 'bold', fontSize: 14},
  itemDataButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'red',
    marginLeft: 10,
    borderRadius: 5,
  },
  buttonNhanDonContainer: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  buttonNhanDon: {
    width: '100%',
    backgroundColor: COLOR_DEFAULT,
    paddingVertical: 10,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
