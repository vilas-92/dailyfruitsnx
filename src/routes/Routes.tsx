import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { observer } from "mobx-react"
import {
  homeRouter as homeRouters,
  loginRouter as loginRouters,
  dashboardRouter as dashboardRoutes,
  privacyPolicyRouter as privacyPolicyRouters,
} from "./index"

import DashboardLayout from "../layouts/Dashboard"
import LandingLayout from "../layouts/Landing"
import AuthLayout from "../layouts/Auth"
import Page404 from "@df/features/login/scenes/Page404"
import ScrollToTop from "@df/layouts/components/ScrollToTop"

const childRoutes = (Layout, routes) =>
  routes.map(({ children, path, component: Component }, index) =>
    children ? (
      // Route item with children
      children.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={(props) => (
            <Layout>
              <Component {...props} />
            </Layout>
          )}
        />
      ))
    ) : (
      // Route item without children
      <Route
        key={index}
        path={path}
        exact
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  )

const Routes = observer(() => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
        {childRoutes(LandingLayout, homeRouters)}
          {childRoutes(LandingLayout, loginRouters)}
          {childRoutes(LandingLayout, privacyPolicyRouters)}
          {childRoutes(DashboardLayout, dashboardRoutes)}
          <Route
            render={() => (
              <AuthLayout>
                <Page404 />
              </AuthLayout>
            )}
          />
        </Switch>
      </ScrollToTop>
    </Router>
  )
})

export default Routes
