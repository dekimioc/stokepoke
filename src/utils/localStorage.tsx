import AsyncStorage from '@react-native-async-storage/async-storage';
import { Cart } from '../types';

export const setLocalObject = async (key: string, value: Cart[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {}
};

export const getLocalObject = async (key: string, callback: (arg: Cart[]) => void) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      callback(JSON.parse(value));
    }
  } catch (e) {}
};
