<script>
    // import { fade } from "svelte/transition"; 
    import { spring } from "svelte/motion";
    import { flip } from "svelte/animate";
    import { modulo } from "../utils/helpers";
    export let estimation;
    // export let nextEstimation;

    const displayedEstimation = spring();
    $: displayedEstimation.set(estimation);
    $: offset = modulo(displayedEstimation, 1);

    

</script>

<div class="valueContainer">
    <article>
        <output class="hidden">{Math.floor($displayedEstimation + 1)}</output>
        <output class="valueInnerWrapper">{Math.floor($displayedEstimation)}</output>
    </article>
</div>

<style>
	.valueContainer {
		display: flex;
        /* background-color: red; */
        /* position: relative; */
		place-items: center;
		align-items: center;
		justify-content: center;
        background-color: var(--color-white);
		font-size: var(--font-size-large);
		padding: calc(var(--unit) / 2);
		border-radius: calc(var(--unit) / 2);
	}

    output {
        display: inline;
    }

    output:first-child {
        display: none;
    }

	.valueInnerWrapper {
		width: calc(var(--unit) * 5);
		min-height: 4ch;
		display: flex;
		justify-content: center;
		align-items: center;
        font-size: 1.25em;
        /* display: inline-block; */
		
	}
</style>