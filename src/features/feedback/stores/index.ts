import React from "react"

import FeedbackStore from "./feedback-store"

export const Stores = {
  feedbackStore: new FeedbackStore(),
}

export const Contexts = {
  feedbackContext: React.createContext(Stores.feedbackStore),
}
