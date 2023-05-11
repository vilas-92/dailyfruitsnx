import { version, ignore } from "mobx-sync"
import { action, observable } from "mobx"
import * as Models from "../models"
import * as Services from "../services"

@version(0.1)
class AvailableAreaStore {
  @ignore @observable availableArea?: Models.IAvailableArea
  @observable listAvailableArea: Models.IAvailableArea[] = []
  @ignore @observable arrPincode?: number[] = []

  @action fetchListAvailableArea() {
    Services.listAvailableArea().then((availableArea) => {
      console.log({ availableArea })
      this.listAvailableArea= availableArea
    })
  }
  @action updateAvailableArea = (availableArea: Models.IAvailableArea) => {
    this.availableArea = availableArea
  }

  @action pincodeAppend(pincode: number) 
  
  {
    this.arrPincode?.push(pincode)
    
  }
}



export default AvailableAreaStore
