<script>
	import Ruler from './Ruler.svelte';
	import Slider from './Slider.svelte';
	import Explanation from './Explanation.svelte';
	import { getFibonacci, TITLES } from '../utils/helpers';
	import Storypoints from './Storypoints.svelte';

	export let title;

	let estimation = 0;
	let nextEstimation = 1;
	$: progressBarValue = 0;
	const handleChange = function (e) {
		estimation = getFibonacci(parseInt(e.currentTarget.value), estimation);
		nextEstimation = getFibonacci(parseInt(e.currentTarget.value)+1, estimation);
		progressBarValue = parseInt(e.currentTarget.value); // incremental value
	};

	$: blocks = Array(estimation);
</script>

<article class="card">
	<header>
		<h1>{title}</h1>
	</header>
	<Storypoints {estimation} {nextEstimation} />
	<Ruler {blocks} />
	<Explanation {progressBarValue} {title} />
	<Slider {handleChange} {progressBarValue} />
</article>

<style>
	.card {
		background-color: var(--color-background-2);
		display: flex;
		border-radius: calc(var(--unit) / 2);
		display: grid;
		grid-template-columns: 2fr 1fr;
		padding: var(--unit);
	}

	header {
		display: flex;
		place-items: center;
	}

	h1 {
		margin: 0;
		text-transform: capitalize;
	}

</style>
