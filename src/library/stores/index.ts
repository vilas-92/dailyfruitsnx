import React from "react"
import RootStore from "./rootStore"
import { AsyncTrunk } from "mobx-sync"

const trunk = new AsyncTrunk(RootStore, {
  storage: localStorage,
  storageKey: "__persist_mobx_stores__",
  delay: 1e3,
})

trunk.init().then(() => {
  RootStore.bannerStore.fetchListBanner()
  RootStore.categoryStore.fetchListcategory()
  RootStore.productStore.fetchListproduct()
  RootStore.availableAreaStore.fetchListAvailableArea()
})

const Contexts = {
  rootStore: React.createContext(RootStore),
  userStore: React.createContext(RootStore.userStore),
  bannerStore: React.createContext(RootStore.bannerStore),
  categoryStore: React.createContext(RootStore.categoryStore),
  productStore: React.createContext(RootStore.productStore),
  availableAreaStore: React.createContext(RootStore.availableAreaStore),
  orderStore: React.createContext(RootStore.orderStore),
}

export default Contexts
