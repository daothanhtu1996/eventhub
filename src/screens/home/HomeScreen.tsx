import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  return (
    <View>
      
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        HomeScreen
      </Text>
      <Button title="logout" onPress={async () => await AsyncStorage.clear()} />
    </View>
  );
};

export default HomeScreen;
