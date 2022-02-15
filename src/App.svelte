<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";

	let feedbacks = [
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

	$: count = feedbacks.length;

	$: average = feedbacks.reduce((acc, cur) => acc + cur.rating, 0) / count;

	const handleDelete = ({ detail }) => {
		feedbacks = feedbacks.filter(({ id }) => id !== detail);
	};

  const handleAddReview = ({ detail }) => {
    feedbacks = [{ ...detail, id: count + 1 }, ...feedbacks];
  };
</script>

<main class="container">
	<FeedbackForm on:add-review={handleAddReview} />
	<FeedbackStats {count} {average} />
	<FeedbackList {feedbacks} on:delete-feedback={handleDelete} />
</main>
