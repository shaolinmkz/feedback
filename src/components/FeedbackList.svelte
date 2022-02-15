<script>
  // import { onDestroy } from "svelte";

  import { scale, fade } from "svelte/transition";
  import FeedbackItem from "./FeedbackItem.svelte";
  import { FeedbackStore } from "../stores"

  // let feedbacks = [];

  // const unsubscribe = FeedbackStore.subscribe((data) => {
  //   feedbacks = data;
  // });

  // onDestroy(() => {
  //   unsubscribe();
  // })
</script>

{#each $FeedbackStore as feedback (feedback.id)}
  <div in:scale out:fade>
    <FeedbackItem {feedback} on:delete-feedback />
  </div>
{/each}
