import React from "react"
import { observer } from "mobx-react"
import * as LibraryComponents from "@df/library/components"
import * as FeatureComponents from "@df/features/feedback/components"

import { Stores } from "../stores"
const ListFeedback = observer(() => {
  const [search, setSearch] = React.useState<string>("")

  React.useEffect(() => {
    Stores.feedbackStore.loadFeedback()
  }, [])

  return (
    <>
      <LibraryComponents.Header>
        <LibraryComponents.PageHeading
          title="User Feedback"
          subTitle="Feedback from Users on the App"
        />
      </LibraryComponents.Header>
      {!Stores.feedbackStore.feedback && <LibraryComponents.FullScreenLoader />}
      {Stores.feedbackStore.feedback && (
        <div className="p-3 w-96 lg:w-2/3 mx-auto rounded-lg overflow-hidden">
          <div className="py-3">
            <LibraryComponents.Form.Input
              label="Search Feedback"
              id="search-feedback"
              value={search}
              onChange={setSearch}
            />
          </div>
          <div className="border border-gray-200">
            {Stores.feedbackStore.feedback
              ?.filter(
                (feedback) =>
                  !search ||
                  feedback.message
                    .toLowerCase()
                    .indexOf(search.toLowerCase()) !== -1
              )
              .map((feedback) => (
                <FeatureComponents.FeedbackCard
                  key={feedback._id}
                  feedback={feedback}
                />
              ))}
          </div>
        </div>
      )}
    </>
  )
})

export default ListFeedback
