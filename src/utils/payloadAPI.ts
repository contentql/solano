import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

import { payloadAPIAxiosInstance } from './payloadAPIAxiosInstance'

/**
 * A generalized function to make HTTP requests using Axios.
 *
 * @param url - The endpoint URL to make the request to.
 * @param options - Optional Axios request configuration options (method, headers, data, etc.).
 * @returns - A promise that resolves to the response data.
 *
 * @throws - Throws an error if the request fails.
 */
export const payloadAPI = async <T = any>(
  url: string,
  options: AxiosRequestConfig = {},
): Promise<T> => {
  try {
    const headers = {
      ...options.headers,
    }

    // Make the HTTP request using the Axios instance and provided options.
    const response: AxiosResponse<T> = await payloadAPIAxiosInstance(url, {
      ...options,
      headers,
    })

    // Return only the data from the response object.
    return response.data
  } catch (error: any) {
    // Rethrow the error to allow further handling upstream.
    throw axios.isAxiosError(error)
      ? error
      : new Error('An unknown error occurred')
  }
}
