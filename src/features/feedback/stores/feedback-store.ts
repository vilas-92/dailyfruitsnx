import { action, observable, computed } from "mobx"
import { version, ignore } from "mobx-sync"
import * as Models from "@df/features/feedback/models"
import * as Services from "@df/features/feedback/services"

@version(0.1)
class FeedbackStore {
  @ignore @observable loading: boolean = false
  @ignore @observable feedback?: Models.Feedback[]

  @computed get feedbackService() {
    return new Services.FeedbackServices()
  }

  @action setLoading(loading: boolean) {
    this.loading = loading
  }
  @action loadFeedback() {
    this.setLoading(true)
    this.feedbackService.listFeedback().then((feedback: Models.Feedback[]) => {
      this.feedback = feedback
      this.setLoading(false)
    })
  }
}

export default FeedbackStore
