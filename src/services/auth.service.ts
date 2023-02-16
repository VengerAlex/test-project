import {useMutation} from 'react-query'
import {_axios, URL_TEMPLATES} from '../api'

type LoginPayload = {
  username: string;
  password: string;
};

type LoginResponse = {
  data: {
    username: string;
    email: string;
    token: string;
  }
}

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>(
    (payload) =>
      _axios.post(URL_TEMPLATES.LOGIN, {...payload})
  )
}
