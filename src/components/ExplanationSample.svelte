<script>
    import { spring, tweened } from "svelte/motion";
    import { fade } from "svelte/transition";
    import { getExplanation } from "../utils/helpers";

    let count = 0;
    const displayedCount = tweened();
    $: displayedCount.set(count);
    $: offset = modulo($displayedCount, 1);

    function modulo(n,m) {
        return ((n%m) + m) %m;
    }


</script>

<h1>Explanation Sample</h1>
<div class="counter">
    <button on:click={() => (count -= 1)}>
        &LeftAngleBracket;
    </button>
    <div class="articleContainer">
    <article style="transform: translate(0, {100 * offset}%)">
        <span class="hidden" aria-hidden="true">{getExplanation(Math.floor($displayedCount + 1))}</span>
        <span transition:fade class="viewport">{getExplanation(Math.floor($displayedCount))}</span>
    </article>
</div>
    <button on:click={() => (count += 1)}>
        &RightAngleBracket;
    </button>
</div>

<style>
    .counter {
        display: flex;
        font-size: 1.5em;
        overflow: hidden;
        max-width: 400px;
        
    }

    .hidden {
        display: none;
        left: -100%;
        opacity: 0;
    }

    .articleContainer {
        overflow: hidden;
        /* border: 1px solid black; */
        width: 500px;
    }

    article {
        margin: 0 16px;
        overflow: hidden;
        /* border: 1px solid red; */
    }

    .viewport {
        min-width: 100px;
        display: inline-block;
        opacity: 1;
    }
</style>