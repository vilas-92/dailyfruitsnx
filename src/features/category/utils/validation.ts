import validate from "validate.js"

export { validate }

export const constraintsCategory = {
  category: {
    presence: true,
    length: {
      minimum: 2,
      message: "Category No must be least 2 numbers",
    },
  },
}
