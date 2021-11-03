<script>
	import { fibRange, explanations, complexity } from '../utils/helpers.js';
	import { tweened } from 'svelte/motion';
    import { fade } from "svelte/transition"; 

	export let title = 'Please enter a title';
    let value = 0; 
	let tweenedEstimation = tweened(value, {
		duration: 250
	});

	const handleChange = function (e) {
        value = e.currentTarget.value;
		$tweenedEstimation = fibRange[value];
	};
</script>

<main>
    <h1>{title}</h1>
    <out class="estimation">{Number.parseFloat($tweenedEstimation).toPrecision(3)}</out>
    <div class="explanation" transition:fade>
        {complexity[value]}
    </div>
    <div class="rangeContainer">
        <input type="range" min="0" max="7" bind:value={value} on:input={handleChange} />
    </div>
</main>

<style>

    main {
        display: grid; 
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        width: 100%;
    }
	
	h1 {
		text-transform: capitalize;
        margin-left: var(--unit);
	}

	.estimation {
		/* background-color: red; */
		font-size: 3em;
        text-align: right; 
        padding-right: var(--unit);
        box-sizing: border-box;
	}

    .explanation {
        grid-column: 1 / -1;
        font-size: 1.2em;
        text-align: center;
        max-width: 600px;
        margin: 0 auto;
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
