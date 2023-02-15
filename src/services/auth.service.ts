import {useMutation} from 'react-query'

type LoginPayload = {
  username: string;
  password: string;
};

type LoginResponse = {
  username: string;
}

// rewrite using axios, extract API link to .env file
export const useLogin = () => {
  const loginMutation = useMutation<LoginResponse, Error, LoginPayload>(
    (payload) =>
      fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).then((res) => {
        return res.json()
      }),
  )

  return loginMutation
}
