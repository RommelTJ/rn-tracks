import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

import ENV from '../../env';

const instance = axios.create({
  baseURL: ENV().baseURL
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default instance;