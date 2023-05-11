/* eslint-disable */
import React, { useEffect } from "react"
import { observer } from "mobx-react"
import Wrapper from "./components/Wrapper"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import Navbar from "./components/Navbar"
import Content from "./components/Content"
import Footer from "./components/Footer"
import Settings from "./components/Settings"
import { useHistory } from "react-router-dom"
import Contexts from "@df/library/stores"

const Dashboard = observer(({ children }) => {
  const rootStore = React.useContext(Contexts.rootStore)
  const history = useHistory()
  useEffect(() => {
    setTimeout(() => {
      rootStore.isLogin().then((isLogin) => {
        if (!isLogin) history.push("/login")
      })
    }, 1000)
  }, [rootStore.userStore.login?.mobileNo])

  return (
    <React.Fragment>
      <Wrapper>
        <Sidebar />
        <Main className={null}>
          <Navbar />
          <Content>{children}</Content>
          <Footer />
        </Main>
      </Wrapper>
      <Settings />
    </React.Fragment>
  )
})

export default Dashboard
