import Axios from "axios";

import * as Config from "@df/config";

export default function createDailyFruitClient() {
  return Axios.create({
    baseURL: Config.Api.DAILYFRUIT_API_HOST,
  });
}
