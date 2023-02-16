import axios from 'axios'

const API_URL = 'https://dummyjson.com/'

export const URL_TEMPLATES = {LOGIN: 'auth/login'}

export const _axios = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
})
