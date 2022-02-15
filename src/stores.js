import { writable } from "svelte/store";

const feedback = [
  {
    id: 1,
    rating: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    id: 2,
    rating: 9,
    text: "Eum architecto quas ab veritatis magnam quaerat laboriosam assumenda cum animi blanditiis modi harum suscipit quis, beatae repellat reiciendis, id totam rerum.",
  },
  {
    id: 3,
    rating: 8,
    text: "Veritatis magnam quaerat laboriosam assumenda cum animi blanditiis modi harum suscipit quis.",
  },
];

export const FeedbackStore = writable(feedback);
