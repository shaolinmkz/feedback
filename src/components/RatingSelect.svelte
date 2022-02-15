<script>
  export let onRate = () => {};
  export let rate = "";
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
</script>

<ul class="ratings">
  {#each ratings as rating (rating)}
    <li class="rating-list">
      <input
        type="radio"
        on:change={() => onRate(rating)}
        id={rating}
        name="rating"
        checked={rating === rate}
      />
      <label for={rating}>{rating}</label>
    </li>
  {/each}
</ul>

<style>
  .ratings {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .rating-list {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    background-color: rgb(243, 243, 243);
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .rating-list label {
    display: inline-block;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .rating-list input {
    display: none;
  }

  .rating-list input:checked + label {
    color: #fff;
    background-color: #ff6a95;
    font-size: 1.1rem;
    font-weight: bold;
  }
</style>
