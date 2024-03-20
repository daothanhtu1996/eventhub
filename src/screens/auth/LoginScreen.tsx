import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ButtonComponent } from '../../components';

const LoginScreen = () => {
  return (
    <View style={{}}>
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}>
        LoginScreen
      </Text>

      <Button
        title="login"
        onPress={async () => await AsyncStorage.setItem('assetToken', 'aaaaa')}
      />
      <ButtonComponent
      text='Login'
      onPress={()=> console.log('login')}
      icon={
        <View>
          <Text>N</Text>
          </View>
      }
      />
    </View>
  );
};

export default LoginScreen;
