import * as Clients from "@df/library/clients"
import * as Models from "../models"

const RELATIVE_PATH = "/order"

export const orderList = () =>
  new Promise<Models.IOrder[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .get(`${RELATIVE_PATH}/listOrder`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const statusChange = (order: any) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/orderStatusChange`, order)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })
