<script>
	import Ruler from './Ruler.svelte';
	import Slider from './Slider.svelte';
	import Explanation from './Explanation.svelte';
	import { getFibonacci } from '../utils/helpers';

	let estimation = 0;
	$: progressBarValue = 0;
	const handleChange = function (e) {
		estimation = getFibonacci(e.currentTarget.value, estimation);
		progressBarValue = parseInt(e.currentTarget.value); // incremental value
	};

	$: blocks = Array(estimation);
</script>

<article class="card">
	<header>
		<h1>Complexity</h1>
	</header>
	<div class="value">
		<output class="valueInnerWrapper">{estimation}</output>
	</div>
	<Ruler {blocks} />
	<Explanation {progressBarValue} />
	<Slider {handleChange} {progressBarValue} />
</article>

<style>
	.card {
		background-color: var(--color-background-2);
		width: 200px;
		display: flex;
		border-radius: calc(var(--unit) / 2);
		display: grid;
		grid-template-columns: 2fr 1fr;
		min-width: 300px;
		padding: var(--unit);
	}

	header {
		display: flex;
		place-items: center;
	}

	h1 {
		margin: 0;
	}

	.value {
		display: flex;
		width: 100%;

		place-items: center;
		align-items: center;
		justify-content: center;
	}

	.valueInnerWrapper {
		width: calc(var(--unit) * 5);
		min-height: 4ch;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--color-white);
		font-size: var(--font-size-large);
		padding: calc(var(--unit) / 2);
		border-radius: calc(var(--unit) / 2);
	}
</style>
