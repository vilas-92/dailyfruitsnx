import async from "../layouts/components/Async"

import { Layout as LayoutIcon, Sliders as SlidersIcon } from "react-feather"

// home
import home from "@df/features/home/scenes/home"
// Landing
import login from "@df/features/login/scenes/login"
import PrivacyPolicy from "@df/features/privacypolicy/PrivacyPolicy"

// Dashboards
const defaultDashboard = async(() => import("@df/features/Default"))

// Banner
const banner = async(() => import("@df/features/banner/scenes/banner"))

// User
const user = async(() => import("@df/features/users/scenes/Users"))

// Category
const category = async(() => import("@df/features/category/scenes/category"))

// Product
const Product = async(() => import("@df/features/product/scenes/Products"))

// Available Area
const AvailableArea = async(
  () => import("@df/features/availableArea/scenes/AvailableArea")
)

// Order
const OrderList = async(() => import("@df/features/order/scenes/OrderList"))
const OrderDetial = async(() => import("@df/features/order/scenes/OrderDetial"))

// Feedback
const Feedback = async(() => import("@df/features/feedback/scenes/feedback-list"))
   
// Routes
const homeRoutes = {
  path: "/",
  name: "Home",
  component: home,
  children: null,
}

const loginRoutes = {
  path: "/login",
  name: "Login",
  component: login,
  children: null,
}

const dashboardRoutes = {
  path: "/dashboard",
  name: "Dashboard",
  header: "Dashboard",
  icon: SlidersIcon,
  children: [
    {
      path: "/dashboard/default",
      name: "Default",
      component: defaultDashboard,
    },
  ],
}

const bannerRoutes = {
  path: "/banner",
  name: "Banner",
  icon: LayoutIcon,
  children: [
    {
      path: "/banner/banner",
      name: "Banner",
      component: banner,
    },
  ],
}

const userRoutes = {
  path: "/user",
  name: "User",
  icon: LayoutIcon,
  children: [
    {
      path: "/user/user",
      name: "User",
      component: user,
    },
  ],
}

const categoryRoutes = {
  path: "/category",
  name: "Category",
  icon: LayoutIcon,
  children: [
    {
      path: "/category/category",
      name: "Category",
      component: category,
    },
  ],
}

const privacyPolicyRouters = {
  path: "/policy",
  name: "Privacy Policy",
  children: [
    {
      path: "/privacy-policy",
      name: "Privacy Policy",
      component: PrivacyPolicy,
    },
  ],
}

const productRoutes = {
  path: "/product",
  name: "Product",
  icon: LayoutIcon,
  children: [
    {
      path: "/product/product",
      name: "Product",
      component: Product,
    },
  ],
}

const AvailableAreaRoutes = {
  path: "/availableArea",
  name: "Available Area",
  icon: LayoutIcon,
  children: [
    {
      path: "/availableArea",
      name: "Available Area",
      component: AvailableArea,
    },
  ],
}

const OrderRoutes = {
  path: "/order",
  name: "Order",
  icon: LayoutIcon,
  children: [
    {
      path: "/order/orderList",
      name: "Order List",
      component: OrderList,
    },
    {
      disable: true,
      path: "/order/orderDetials",
      name: "Order Details",
      component: OrderDetial,
    },
  ],
}

const FeedbackRoutes = {
  path: "/feedback",
  name: "Feedback",
  icon: LayoutIcon,
  children: [
    {
      path: "/feedback/listFeedback",
      name: "Feedback List",
      component: Feedback,
    },
  ],
}

console.log({ userRoutes, productRoutes })

// Dashboard specific routes
export const dashboardRouter = [
  dashboardRoutes,
  userRoutes,
  OrderRoutes,
  bannerRoutes,
  categoryRoutes,
  productRoutes,
  AvailableAreaRoutes,
  FeedbackRoutes,
]

// Landing specific routes
export const homeRouter = [homeRoutes]
export const loginRouter = [loginRoutes]
export const privacyPolicyRouter = [privacyPolicyRouters]

// All routes
export default [
  dashboardRoutes,
  userRoutes,
  OrderRoutes,
  bannerRoutes,
  categoryRoutes,
  productRoutes,
  AvailableAreaRoutes,
  FeedbackRoutes,
]
