import {View, Text, Button} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {removeAuth} from '../../redux/reducers/authReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();
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
      <Button title="logout" onPress={() => dispatch(removeAuth({}))} />
    </View>
  );
};

export default HomeScreen;
