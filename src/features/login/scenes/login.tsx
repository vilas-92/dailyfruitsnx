/* eslint-disable */
import React, { useState, useEffect } from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import { Col, Container, Row } from "reactstrap"
import * as Assets from "@df/library/assets"
import Contexts from "@df/library/stores"
import * as Utils from "@df/library/utils"
import * as ModelsUser from "@df/features/users/models"
import * as Features from "@df/features"
import { useHistory } from "react-router-dom"

const Login = observer(() => {
  const history = useHistory()
  const rootStore = React.useContext(Contexts.rootStore)
  const [errors, setErrors] = useState<ModelsUser.Login>()

  useEffect(() => {
    rootStore.isLogin().then((isLogin) => {
      if (isLogin) {
        history.push("/dashboard/default")
      } else {
        history.push("/login")
      }
    })
  }, [rootStore.userStore.login])

  return (
    <>
      <Container fluid className="bg-gray-600">
        <Row className="h-screen items-center">
          <Col>
            <div className="flex flex-col justify-center items-center">
              <img src={Assets.logo} className="w-20 h-15" alt="logo" />
              <h2 className="text-2xl text-white font-bold">Daily Fruit</h2>
              <br />
            </div>
            <div className="md:flex md:justify-center mb-6">
              <div className="bg-white p-6 flex-col  md:items-center   rounded-md">
                <LibraryComponents.List
                  direction="col"
                  space={4}
                  justify="stretch"
                  fill
                >
                  <LibraryComponents.Form.Input
                    label="Mobile No"
                    id="mobileNo"
                    placeholder="Mobile No"
                    value={rootStore.userStore.loginInput?.mobileNo}
                    onChange={(mobileNo) => {
                      setErrors({
                        ...errors,
                        mobileNo: Utils.validate.single(
                          mobileNo,
                          Utils.constraintsLogin.mobileNo
                        ),
                      })
                      rootStore.userStore.updateLoginInput({
                        ...rootStore.userStore.loginInput,
                        mobileNo,
                      })
                    }}
                  />
                  {errors?.mobileNo && (
                    <span className="text-red-600 font-medium relative">
                      {errors.mobileNo}
                    </span>
                  )}
                  <LibraryComponents.Form.Input
                    type="password"
                    label="Password"
                    id="password"
                    placeholder="Password"
                    value={rootStore.userStore.loginInput?.password}
                    onChange={(password) => {
                      setErrors({
                        ...errors,
                        password: Utils.validate.single(
                          password,
                          Utils.constraintsLogin.password
                        ),
                      })
                      rootStore.userStore.updateLoginInput({
                        ...rootStore.userStore.loginInput,
                        password,
                      })
                    }}
                  />
                  {errors?.password && (
                    <span className="text-red-600 font-medium relative">
                      {errors.password}
                    </span>
                  )}
                </LibraryComponents.List>
                <br />
                <LibraryComponents.List direction="row" space={3} align="center">
                  <LibraryComponents.Button
                    size="medium"
                    type="solid"
                    icon={LibraryComponents.Icons.Check}
                    onClick={() => {
                      if (
                        Utils.validate(
                          rootStore.userStore.loginInput,
                          Utils.constraintsLogin
                        ) === undefined
                      ) {
                        rootStore.setProcessLoading(true)
                        Features.Users.Pipes.onLogin(rootStore.userStore.loginInput!)
                          .then((res) => {
                            rootStore.setProcessLoading(false)
                            if (res.status === 200) {
                              LibraryComponents.ToastsStore.success(
                                `Welcome ${res.data.data._doc.mobileNo}`
                              )
                              rootStore.userStore.clearLoginInput()
                              // rootStore.userStore.updateLogin(res.data.data)
                              rootStore.userStore.saveLogin(res.data.data._doc)
                              history.push("/dashboard/default")
                            } else if (res.status === 203) {
                              LibraryComponents.ToastsStore.error(
                                "User not found. Please enter correct information!"
                              )
                            }
                          })
                          .catch(() => {
                            LibraryComponents.ToastsStore.error(
                              "User not found. Please enter correct information!"
                            )
                          })
                      } else {
                        LibraryComponents.ToastsStore.warning(
                          "Please enter all information!"
                        )
                      }
                    }}
                  >
                    Login
                  </LibraryComponents.Button>
                  <LibraryComponents.Button
                    size="medium"
                    type="outline"
                    icon={LibraryComponents.Icons.Remove}
                    onClick={() => {
                      rootStore.userStore.clearLogin()
                    }}
                  >
                    Clear
                  </LibraryComponents.Button>
                </LibraryComponents.List>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
})

export default Login
