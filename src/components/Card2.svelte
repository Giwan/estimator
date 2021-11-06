<script>
	import { fibRange, complexity, explanations } from '../utils/helpers.js';
	import { tweened } from 'svelte/motion';
    import { fade } from "svelte/transition"; 

	export let title = 'Please enter a title';
    let value = 0; 
	let tweenedEstimation = tweened(value, {
		duration: 250
	});

	const handleChange = function (e) {
        value = parseInt(e.currentTarget.value);
		$tweenedEstimation = fibRange[value];
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
        <input type="range" min="0" max="7" bind:value={value} on:input={handleChange} />
    </div>
</article>

<style>

    article {
        display: grid; 
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 2fr 2fr;
        height: 200px;
        padding-bottom: calc(var(--unit) * 2);
        margin-bottom: calc(var(--unit) * 2);
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
		font-size: 3em;
        text-align: right; 
        padding-right: var(--unit);
        box-sizing: border-box;
	}

    .explanationContainer {
        grid-column: 1 / -1;
        height: 100px;
        overflow: hidden;
        max-width: 600px;
        margin: var(--unit) auto;
        width: 100%;
    }

    .explanation {
        height: 100%;
        font-size: 1.2em;
        font-style: italic;
        color: var(--color-white-dim);
    }

    .rangeContainer {
        grid-column: 1 / -1;
        width: 100%;
        padding: 0 var(--unit);
        box-sizing: border-box;
        display: flex;
        place-items: center;
    }

    input[type="range"] {
        width: 100%;
        margin: 0 auto;
    }
</style>
