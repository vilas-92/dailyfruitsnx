import Axios from "axios"

import * as Config from "@df/config"

export default function createDailyFruitClient(token?: string) {
  return Axios.create({
    baseURL: Config.Api.DAILYFRUIT_API_HOST,
    headers: {
      "x-dailyfruit-Key":
        token ||
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzM4NCJ9.eyJtb2JpbGVObyI6Iis5MTkyNjAzMDMxNTEifQ.v7F9-iFeraXZA68HNAL-PsyzKKuT2bQhxSYeEmPz9rHaTIHPshCiwrjr7DeFZLbR",
    },
  })
}
