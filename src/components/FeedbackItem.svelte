<script>
	import { createEventDispatcher } from "svelte";
	import Card from "./Card.svelte";
	export let feedback = {};

	const dispatch = createEventDispatcher();

	const handleDelete = () => {
		dispatch("delete-feedback", feedback.id);
	};
</script>

<Card>
	<div class="num-display">
		{feedback.rating}
	</div>
	<button class="close" on:click={handleDelete} type="button">&times;</button>
	<p class="text-display">{feedback.text}</p>
</Card>

<style>
	.num-display {
		font-size: 2rem;
		font-weight: bold;
		color: #fff;
		text-align: center;
		background-color: #ff6a95;
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		line-height: 3rem;
		margin: 0 auto;
		position: absolute;
		left: -1.5rem;
		top: -1.3rem;
		border: 1px solid #fff;
	}

	.text-display {
		font-size: 1.3rem;
		color: #333;
		width: 100%;
		padding: 0.5rem;
		margin: 0 auto;
	}

	.close {
		position: absolute;
		top: 5px;
		right: 10px;
		color: #333;
		font-size: 2rem;
		font-weight: lighter;
	}

	.close:hover {
		color: #ff6a95;
    cursor: pointer;
	}
</style>
