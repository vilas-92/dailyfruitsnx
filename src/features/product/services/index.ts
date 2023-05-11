import * as Clients from "@df/library/clients"
import * as Models from "../models"

const RELATIVE_PATH = "/product"

export const addproduct = (product: any) =>
  new Promise<any>((resolve, reject) => {
    const formData = new FormData()
    formData.append("category", product.category || "")
    formData.append("subCategory", product.subCategory || "")
    formData.append("title", product.title || "")
    formData.append("unit", product.unit || "")
    formData.append("description", product.description || "")
    formData.append("benefits", product.benefits || "")
    formData.append("info", product.info || "")
    formData.append("mrp", product.mrp)
    formData.append("sellPrice", product.sellPrice)
    formData.append("isStock", product.isStock || "")
    formData.append("isStatus", product.isStatus || "")
    formData.append("file", product.image)
    formData.append("folder", "product")
    formData.append("name", product.image.name)
    formData.append(
      "image",
      `https://dailyfruits.blob.core.windows.net/product/${product.image.name}`
    )
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/addproduct`, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        resolve(res as Models.Product)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const listproduct = () =>
  new Promise<Models.Product[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .get(`${RELATIVE_PATH}/listproduct`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })
export const deleteproduct = (id: string) =>
  new Promise<Models.Product[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .delete(`${RELATIVE_PATH}/deleteproduct/${id}`)
      .then((res) => {
        resolve(res.data)
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

export const uploadImage = (product: any) =>
  new Promise<any>((resolve, reject) => {
    const formData = new FormData()
    formData.append("id", product.id || "")
    formData.append("file", product.image)
    formData.append("folder", "product")
    formData.append("name", product.image.name)
    formData.append(
      "image",
      `https://dailyfruits.blob.core.windows.net/product/${product.image.name}`
    )
    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/uploadImage`, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject({ error })
      })
  })
