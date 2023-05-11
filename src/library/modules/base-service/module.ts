/**
 * @fileoverview Use this file to wrap library using custom
 * implementation related to Memetoons standards
 * @package BaseService Module
 * @author daily fruits
 */

import Axios, { AxiosInstance } from "axios"
import * as Config from "@df/config"

const apiHost = {
  node: Config.Api.DAILYFRUIT_API_HOST,
}

function createMemeToonsClient(client: keyof typeof apiHost, token?: string) {
  let instance: AxiosInstance
  if (!token)
    instance = Axios.create({
      baseURL: apiHost[client],
    })
  else {
    instance = Axios.create({
      baseURL: apiHost[client],
      headers: {
        "x-dailyfruit-Key":
          token ||
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJtb2JpbGVObyI6Iis5MTkyNjAzMDMxNTEifQ.v7F9-iFeraXZA68HNAL-PsyzKKuT2bQhxSYeEmPz9rHaTIHPshCiwrjr7DeFZLbR",
      },
      timeout: 1000 * 30,
    })
  }
  return instance
}

class BaseService {
  client: AxiosInstance
  constructor(token?: string) {
    this.client = createMemeToonsClient("node", token)
    this.client.interceptors.request.use((request) => {
      console.log(
        `${request.method?.toUpperCase()} ${request.baseURL}${request.url}`
      )
      console.log(`${JSON.stringify(request.data)}`)
      return request
    })
    this.client.interceptors.response.use((response) => {
      console.log(`RESPONSE: ${response.status}: ${response.data.data}`)
      return response
    })
  }
}

export default BaseService
