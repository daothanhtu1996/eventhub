import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {addAuth, authSelector} from '../redux/reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';

const AppRouters = () => {
  const {getItem} = useAsyncStorage('auth');
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  console.log(auth, 'auth');

  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    const res = await getItem();
    res && dispatch(addAuth(JSON.parse(res)));
  };
  return <>{auth.accesstoken ? <MainNavigator /> : <AuthNavigator />}</>;
};

export default AppRouters;
