import * as Clients from "@df/library/clients"
import * as Models from "../models"

const RELATIVE_PATH = "/availableArea"

export const addAvailableArea = (availableArea: any) =>
  new Promise<any>((resolve, reject) => {
    
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/addAvailableArea`, availableArea)
      .then((res) => {
        resolve(res as Models.IAvailableArea)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const listAvailableArea = () =>
  new Promise<Models.IAvailableArea[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .get(`${RELATIVE_PATH}/listAvailableArea`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })
export const deleteavailableArea = (id: string) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .delete(`${RELATIVE_PATH}/deleteAvailableArea/${id}`)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })
  
  export const updateSingleFiled = (info: any) =>
  new Promise<any>((resolve, reject) => {
    console.log({ info })

    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/updateSingleFiled`, info)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })