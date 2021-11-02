<script>
    import { flip } from "svelte/animate";
    import { fade, fly } from "svelte/transition";
    let estimation = [];
    let progressBarValue = 0; 
    let fibRange = [0,1,2,3,5,8,13,20]; 
    let updatedRange = [...fibRange]
    $: {
        estimation = [fibRange[progressBarValue]]
    }
</script>

<div>
    <div class="estimationContainer">
        Complexity
        {#each estimation as estimate (estimate)}
            <span class="estimation" transition:fade>{estimate}</span>
        {/each}
    </div>
    {#each updatedRange as rangeValue (rangeValue)}
        <span animate:flip transition:fly class:selected={rangeValue === fibRange[progressBarValue]}>{rangeValue}</span>
    {/each}
    <div>
        <input type="range" min={0} max={7} bind:value={progressBarValue} />
    </div>
</div>
<style>

    .estimationContainer {
        height: 50px;
        width: 200px;
        overflow:hidden;
        /* border: 1px solid red; */
        font-size: 1em;
        margin-bottom: var(--unit);
    }

    .estimation {
        font-size: 3em;
    }

    .selected {
        /* color: red; */
        font-size: 4em;
    }

    span {
        display: inline-block;
        font-size: 2em;
        margin-right: var(--unit);
        min-width: 2ch;
    }
</style>