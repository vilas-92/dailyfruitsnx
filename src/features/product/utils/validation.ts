import validate from "validate.js"
export { validate }
export const constraintsProduct = {
  category: {
    presence: true,
    length: {
      minimum: 2,
      message: "Category must be least 2 characters ",
    },
  },
  subCategory: {
    presence: true,
    length: {
      minimum: 2,
      message: "Sub Category must be least 2 characters",
    },
  },
  title: {
    presence: true,
    length: {
      minimum: 2,
      message: "Title must be least 2 characters",
    },
  },
  mrp: {
    presence: true,
  },
  sellPrice: {
    presence: true,
  },
}
