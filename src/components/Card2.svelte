<script>
	import { fibRange, complexity, explanations } from '../utils/helpers.js';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';
	import { updateEstimation } from '../stores/store.js';

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
	<div class="rangeContainer">
		<input type="range" min="0" max="7" bind:value on:input={handleChange} />
	</div>
</article>

<style>
    :root {
        --range-thumb-height: 40px;
		--range-track-color: silver;
		--range-track-radius: var(--unit);
    }
	article {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 2fr 2fr;
		height: 200px;
		padding-bottom: calc(var(--unit) * 2);
		margin: var(--unit);
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

	.rangeContainer {
		grid-column: 1 / -1;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		place-items: center;
	}

	input[type='range'] {
		width: 100%;
		margin: -5.5px 0;
		background-color: transparent;
		-webkit-appearance: none;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		background: var(--range-track-color);
		border: 0.2px solid var(--range-track-color);
		border-radius: var(--unit);
		width: 100%;
		height: 14px;
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-thumb {
		margin-top: -12px;
		width: 20px;
		height: var(--range-thumb-height);
		background-color: var(--range-thumb-color, red);
		border: 1.8px solid #fefefe;
		border-radius: var(--range-track-radius);
		cursor: pointer;
		-webkit-appearance: none;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: #2e2e2e;
	}
	input[type='range']::-moz-range-track {
		background: var(--range-track-color);
		border: 0.2px solid var(--range-track-color);
		border-radius: var(--range-track-radius);
		width: 100%;
		height: 14px;
		cursor: pointer;
	}
	input[type='range']::-moz-range-thumb {
		width: 20px;
		height: var(--range-thumb-height);
		background-color: var(--range-thumb-color, red);
		border: 1.8px solid #fefefe;
		border-radius: 15px;
		cursor: pointer;
	}
	input[type='range']::-ms-track {
		background: transparent;
		border-color: transparent;
		border-width: 0 0;
		color: transparent;
		width: 100%;
		height: 14px;
		cursor: pointer;
	}
	input[type='range']::-ms-fill-lower {
		background: #141414;
		border: 0.2px solid var(--range-track-color);
		border-radius: 2.6px;
	}
	input[type='range']::-ms-fill-upper {
		background: var(--range-track-color);
		border: 0.2px solid var(--range-track-color);
		border-radius: 2.6px;
	}
	input[type='range']::-ms-thumb {
		width: 20px;
        height: var(--range-thumb-height);
		background: var(--range-thumb-color, red);
		border: 1.8px solid #fefefe;
		border-radius: 15px;
		cursor: pointer;
		margin-top: 0px;
		/*Needed to keep the Edge thumb centred*/
	}
	input[type='range']:focus::-ms-fill-lower {
		background: var(--range-thumb-color, red);
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #2e2e2e;
	}
	/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
	@supports (-ms-ime-align: auto) {
		/* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
		input[type='range'] {
			margin: 0;
			/*Edge starts the margin from the thumb, not the track as other browsers do*/
		}
	}
</style>
