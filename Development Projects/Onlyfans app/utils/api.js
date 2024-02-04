import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const signUp = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchUserProfile = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchContent = async () => {
  try {
    const response = await api.get('/content');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchSubscriptions = async (userId) => {
  try {
    const response = await api.get(`/subscriptions/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createContent = async (contentData) => {
  try {
    const response = await api.post('/content', contentData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createSubscription = async (subscriptionData) => {
  try {
    const response = await api.post('/subscriptions', subscriptionData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};