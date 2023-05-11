export interface Feedback {
  _id: string;
  dateOfEntry: Date;
  message: string;
  user?: {
    name: string;
    id: string;
  };
}

export interface FeedbackContent {
  title: string;
  body: string;
  message: string;
  data: string;
}
