import { version, ignore } from "mobx-sync"
import { action, observable } from "mobx"
import * as Models from "../models"
import * as Services from "../services"

@version(0.1)
class ProductStore {
  @ignore @observable product?: Models.Product
  @observable listproduct: Models.Product[] = []

  constructor() {
    this.product = {
      ...this.product,
      isStock: "In Stock",
      isStatus: "Show",
    }
  }

  @action fetchListproduct() {
    Services.listproduct().then((product) => {
      console.log({ product })
      this.listproduct = product
    })
  }
  @action updateproduct = (product: Models.Product) => {
    this.product = product
  }
}
export default ProductStore
