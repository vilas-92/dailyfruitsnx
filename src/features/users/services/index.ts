import * as Clients from "@df/library/clients"
import * as Models from "@df/features/users/models"

const RELATIVE_PATH = "/auth"

export const onLogin = (user: Models.Login) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/login`, user)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })


export const addUser = (user: Models.Users) =>
  new Promise<Models.Users>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/addUser`, user)
      .then((res) => {
        resolve(res.data.data as Models.Users)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const userList = () =>
  new Promise<Models.Users[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .get(`${RELATIVE_PATH}/userList`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const deleteUser = (id: string) =>
  new Promise<Models.Users[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .delete(`${RELATIVE_PATH}/deleteUser/${id}`)
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const changePassword = (body: any) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/changePassword`, body)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const checkExitsUserId = (userId: string) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/checkExitsUserId`, { userId })
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const updateUserSingleFiled = (userInfo: any) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/updateUserSingleFiled`, userInfo)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })
