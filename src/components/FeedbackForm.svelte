<script>
	import { createEventDispatcher } from "svelte";
	import Card from "./Card.svelte";
	import Button from "./Button.svelte";
	import RatingSelect from "./RatingSelect.svelte";

	const dispatch = createEventDispatcher();

	let rating = 10;
	const minCharLength = 10;
	let text = "";
	$: message = `"${text}" must be at least ${minCharLength} characters long`;
	let btnDisabled = true;

	const handleInput = ({ target: { value } }) => {
		btnDisabled = value.length < minCharLength;
	};

	const handleSubmit = () => {
		dispatch("add-review", { text, rating });

		resetComponentData();
	};

	const resetComponentData = () => {
		text = "";
		btnDisabled = true;
		rating = 10;
	};

	const handleRating = (rate) => {
		rating = rate;
	};
</script>

<Card>
	<header><h2>How would you rate our service to you?</h2></header>
	<RatingSelect onRate={handleRating} rate={rating} />
	<form on:submit|preventDefault={handleSubmit}>
		<div class="input-group">
			<input
				type="text"
				on:input={handleInput}
				bind:value={text}
				placeholder="Tell us something that keeps you coming back"
			/>
			<Button disabled={btnDisabled} type="submit">Send</Button>
		</div>

		{#if text.length > 0 && btnDisabled}
			<p class="error">{message}</p>
		{/if}
	</form>
</Card>

<style>
	header {
		width: 100%;
		margin-bottom: 20px;
	}

	header h2 {
		font-size: 1.5rem;
		font-weight: 600;
		text-align: center;
	}

	.input-group {
		width: 100%;
		border: 1px solid #ccc;
		border-radius: 5px;
		background: #fff;
		display: flex;
		justify-content: space-between;
		padding: 8px 10px;
	}

	input {
		width: 99%;
		border: none;
		font-size: 1rem;
		color: #202142;
	}

	.error {
		color: red;
		font-size: 0.8rem;
		margin-top: 5px;
	}
</style>
