import * as Clients from "@df/library/clients"
import * as Models from "../models"

const RELATIVE_PATH = "/banner"

export const addBanner = (banner: any) =>
  new Promise<any>((resolve, reject) => {
    console.log({ banner })
    const form = new FormData()
    form.append("title", banner.title)
    form.append("category", banner.category)
    form.append("subCategory", banner.subCategory)
    form.append("file", banner.image)
    form.append("folder", "banner")
    form.append("name", banner.image.name)
    form.append(
      "image",
      `https://dailyfruits.blob.core.windows.net/banner/${banner.image.name}`
    )
    console.log({ form })

    const client = Clients.createDailyFruitClient()
    client
      .post(`${RELATIVE_PATH}/addBanner`, form, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        resolve(res as Models.IBanner)
      })
      .catch((error) => {
        reject({ error })
      })
  })

export const listBanner = () =>
  new Promise<Models.IBanner[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .get(`${RELATIVE_PATH}/listBanner`)
      .then((res) => {
        resolve(res.data.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })
export const deleteBanner = (id: string) =>
  new Promise<Models.IBanner[]>((resolve, reject) => {
    const client = Clients.createDailyFruitClient()
    client
      .delete(`${RELATIVE_PATH}/deleteBanner/${id}`)
      .then((res) => {
        resolve(res.data)
      })
      .catch((error) => {
        reject({ error })
      })
  })
