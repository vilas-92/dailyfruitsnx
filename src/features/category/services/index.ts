import * as Clients from "@df/library/clients"
import * as Models from "../models"

const RELATIVE_PATH = "/category"

export const addcategory = (category: any, arrSubCategory: string[]) =>
  new Promise<any>((resolve, reject) => {
    const form = new FormData()
    form.append("category", category.category)
    form.append("subCategory", JSON.stringify(arrSubCategory))
    form.append("file", category.image)
    form.append("folder", "category")
    form.append("name", category.image.name)
    form.append(
      "image",
      `https://dailyfruits.blob.core.windows.net/category/${category.image.name}`
    )
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/addcategory`, form, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        resolve(res as Models.Category)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const listcategory = () =>
  new Promise<Models.Category[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .get(`${RELATIVE_PATH}/listCategory`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })
export const deletecategory = (id: string) =>
  new Promise<any>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .delete(`${RELATIVE_PATH}/deleteCategory/${id}`)
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
