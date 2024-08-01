import { env } from '@env'
import axios, { AxiosInstance } from 'axios'

// Creating an Axios instance with default configuration
export const payloadAPIAxiosInstance: AxiosInstance = axios.create({
  baseURL: `${env.PAYLOAD_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
    // Add other custom default headers here
  },
})
