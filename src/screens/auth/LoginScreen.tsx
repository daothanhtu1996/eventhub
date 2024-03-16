import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  return (
    <View>
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        LoginScreen
      </Text>
      <Button title="logout" onPress={async () => await AsyncStorage.clear} />

      <Button
        title="login"
        onPress={async () => await AsyncStorage.setItem('assetToken', 'aaaaa')}
      />
    </View>
  );
};

export default LoginScreen;
