import { action, observable } from "mobx"
import { version, ignore } from "mobx-sync"
import SessionStore from "mobx-session"

import UsersStore from "@df/features/users/stores"
import BannerStore from "@df/features/banner/stores"
import CategoryStore from "@df/features/category/stores"
import ProductStore from "@df/features/product/stores"
import AvailableAreaStore from "@df/features/availableArea/stores"
import OrderStore from "@df/features/order/stores"

@version(1.0)
class RootStore {
  @ignore @observable processLoading: boolean = false

  @observable userStore = new UsersStore()
  @observable bannerStore = new BannerStore()
  @observable categoryStore = new CategoryStore()
  @observable productStore = new ProductStore()
  @observable availableAreaStore = new AvailableAreaStore()
  @observable orderStore = new OrderStore()

  @action setProcessLoading(processLoading: boolean) {
    this.processLoading = processLoading
  }

  @action isLogin(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      try {
        if (SessionStore.initialized) {
          if (SessionStore.hasSession) {
            resolve(true)
          }
          resolve(false)
        }
      } catch (error) {
        reject(error)
      }
    })
  }
}
const store = new RootStore()
export default store
