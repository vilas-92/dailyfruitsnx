/**
 * @fileoverview Use this file invoke Memetoons API
 * implementation related to Memetoons standards
 * @package Feed Service
 * @author daily fruits
 */
//import * as Models from "../models"
import BaseService from "@df/library/modules/base-service"

class FeedbackService extends BaseService {
  listFeedback = () =>
    new Promise<any>((resolve, reject) => {
      this.client
        .get(`/feedback/listFeedback`)
        .then((res) => {
          resolve(res.data.data)
        })
        .catch((error) => {
          reject({ error })
        })
    })
}

export default FeedbackService
