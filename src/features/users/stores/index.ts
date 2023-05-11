import { version, ignore } from "mobx-sync"
import { action, observable, extendObservable, runInAction } from "mobx"
import SessionStore from "mobx-session"
import * as Models from "../models"
import * as Services from "../services"

@version(0.1)
class UsersStore {
  @ignore @observable loginInput?: Models.Login
  @observable login?: Models.Login
  @ignore @observable user?: Models.Users
  @observable userList?: Models.Users[]
  @ignore @observable changePassword?: Models.ChangePassword
  @observable checkExitsUserId: boolean = false

  constructor() {
    SessionStore.initialize({ name: "dailyfruits" })
    extendObservable(this, {
      login: null,
      loginError: false,
      logoutError: false,
      get loggedIn() {
        return this.login !== null && SessionStore.hasSession
      },
    })
    runInAction("Load user", async () => {
      this.login = await SessionStore.getSession()
    })
  }

  // session
  @action saveLogin = (session) => {
    SessionStore.saveSession(session)
    runInAction("Save user", () => {
      this.login = session
    })
  }
  @action removeUser = (): Promise<boolean> => {
    return new Promise<any>((resolve) => {
      if (SessionStore.hasSession) {
        SessionStore.deleteSession()
        runInAction("Logout user", () => {
          this.login = undefined
        })
        resolve(true)
      }
    })
  }

  @action fetchUserList() {
    Services.userList().then((res) => {
      this.userList = res
    })
  }

  @action updateLoginInput(user: Models.Login) {
    this.loginInput = user
  }
  @action clearLoginInput() {
    this.loginInput = undefined
  }

  @action updateLogin(user: Models.Login) {
    console.log({ user })

    this.login = user
  }
  @action clearLogin() {
    this.login = undefined
  }
}

export default UsersStore
