import axios from 'axios';

const baseUrl = '/auth';

export const AuthApi = {
  login: async (email: string, password: string) => {
    const response = await axios.post(baseUrl, {
      email: email,
      password: password,
    });

    return response;
  },
};
