import { version, ignore } from "mobx-sync"
import { action, observable } from "mobx"
import * as Models from "../models"
import * as Services from "../services"

@version(0.1)
class CategoryStore {
  @ignore @observable category?: Models.Category
  @observable listcategory: Models.Category[] = []
  @ignore @observable arrSubCategory?: string[] = []

  @action fetchListcategory() {
    Services.listcategory().then((category) => {
      console.log({ category })
      this.listcategory = category
    })
  }
  @action updateCategory = (category: Models.Category) => {
    this.category = category
  }

  @action subCategoryAppend(subCategory: string) 
  
  {
    console.log({ subCategory })

    this.arrSubCategory?.push(subCategory)
    

    console.log({ value: this.arrSubCategory })
  }
}



export default CategoryStore
