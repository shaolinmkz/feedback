<script>
	import FeedbackForm from "./components/FeedbackForm.svelte";
	import FeedbackList from "./components/FeedbackList.svelte";
	import FeedbackStats from "./components/FeedbackStats.svelte";
  import { FeedbackStore } from "./stores";

	$: feedbacks = $FeedbackStore

	$: count = feedbacks.length;

	$: average = feedbacks.reduce((acc, cur) => acc + cur.rating, 0) / count;

	const handleDelete = ({ detail }) => {
		const newFeedbacks = feedbacks.filter(({ id }) => id !== detail);
    FeedbackStore.update(() => newFeedbacks);
	};

  const handleAddReview = ({ detail }) => {
    const newFeedbacks = [{ ...detail, id: count + 1 }, ...feedbacks];
    FeedbackStore.update(() => newFeedbacks);
  };
</script>

<main class="container">
	<FeedbackForm on:add-review={handleAddReview} />
	<FeedbackStats {count} {average} />
	<FeedbackList {feedbacks} on:delete-feedback={handleDelete} />
</main>
