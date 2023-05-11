import { version } from "mobx-sync"
import { action, observable } from "mobx"
import * as Models from "../models"
import * as Services from "../services"

@version(0.1)
class OrderStore {
  @observable orderList?: Models.IOrder[]

  @action fetchOrderList() {
    Services.orderList().then((res) => {
      console.log({ order: res })

      this.orderList = res
    })
  }
}

export default OrderStore
