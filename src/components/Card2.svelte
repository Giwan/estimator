<script>
	import { fibRange, explanations } from '../utils/helpers.js';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { updateEstimation } from '../stores/store.js';
	import RangeContainer from "./RangeContainer.svelte";

	export let title = 'Please enter a title';
	let value = 0;
	const tweenedEstimation = tweened(value, {
		duration: 250
	});

	const handleChange = function (e) {
		value = parseInt(e.currentTarget.value);
		$tweenedEstimation = fibRange[value];
		updateEstimation(title, fibRange[value]);
	};

	const calculateColor = (value) => {
		const _value = fibRange[value];
		if (_value === 20 ) return "#E97474";
		if (_value >= 13 ) return "#E97474";
		if (_value >= 5 ) return "#DFB583";
		if (_value >= 3 ) return "#34CFD9";
		if (_value > -1 ) return "#69C349";
	}

	$: texts = explanations[title];

</script>

<article>
	<h1>{title}</h1>
	<out class="estimation">{Number.parseFloat($tweenedEstimation).toPrecision(3)}</out>
	<div class="explanationContainer">
		{#each texts as item, i}
			{#if i === value}
				<div class="explanation" transition:fade>{item}</div>
			{/if}
		{/each}
	</div>
	<RangeContainer {value} on:input={handleChange} --range-thumb-color={calculateColor(value)} />
</article>

<style>
    
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 2fr 2fr;
		height: 200px;
		padding-bottom: calc(var(--unit) * 2);
		margin: var(--unit) 0;
	}

	h1 {
		text-transform: capitalize;
		margin: 0;
		/* background-color: red; */
		display: flex;
		place-items: center;
		/* justify-content: flex-start; */
		color: var(--color-white-dim);
		text-transform: uppercase;
		/* border: 1px solid var(--color-divider); */
		font-size: var(--font-size);
	}

	.estimation {
		/* background-color: red; */
		font-size: 2em;
		text-align: right;
		padding-right: var(--unit);
		box-sizing: border-box;
	}

	.explanationContainer {
		grid-column: 1 / -1;
		overflow: hidden;
		max-width: 600px;
		margin-top: calc(var(--unit) / 2);
		width: 100%;
	}

	.explanation {
		height: 100%;
		font-size: 1em;
		font-style: italic;
		color: var(--color-white-dim);
	}

	
</style>
