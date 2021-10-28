<script>
    export let progressBarValue; 
    export let handleChange;
</script>

<div class="actionContainer">
	<input type="range" min="0" max="7" value={progressBarValue} on:input={handleChange} />
</div>

<style>
	.actionContainer {
		grid-column: span 2;
		text-align: center;
		margin: var(--unit) 0;
	}

	.actionContainer input {
		width: 100%;
	}

</style>
