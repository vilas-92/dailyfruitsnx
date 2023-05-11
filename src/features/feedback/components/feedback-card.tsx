import React from "react"
import * as Models from "@df/features/feedback/models"
import Moment from "moment"
import * as LibraryComponents from "@df/library/components"

interface FeedbackCardProps {
  feedback: Models.Feedback
}

const FeedbackCard = (props: FeedbackCardProps) => (
  <div className="px-4 py-3 border-b border-gray-200 bg-white">
    <LibraryComponents.List direction="row" space={3}>
      <img
        src={`https://ui-avatars.com/api/?name=${
          props.feedback.user?.name || "Anonymous"
        }&background=random`}
        className="h-10 w-10 rounded-full"
        alt={props.feedback.user?.name || "Anonymous"}
      />
      <div className="flex-1">
        <p className="text-sm leading-4">{props.feedback.message}</p>
        <p className="text-xs m-0 leading-4 text-gray-400">
          <span className="text-indigo-400">
            {props.feedback.user?.name || "Anonymous"} User{" "}
          </span>{" "}
          -{" "}
          <span className="text-gray-400">
            {Moment(props.feedback.dateOfEntry).fromNow()}
          </span>
        </p>
      </div>
      <LibraryComponents.List direction="row" space={3}>
        {/* <LibraryComponents.Button
          type={"outline"}
          disabled={
            !props.feedback.user?.id
              ? "We don't have the user's identity to contact them"
              : ""
          }
        >
          Respond
        </LibraryComponents.Button> */}
      </LibraryComponents.List>
    </LibraryComponents.List>
  </div>
)

export default FeedbackCard
