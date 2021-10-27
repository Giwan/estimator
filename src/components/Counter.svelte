<script>
    import { spring } from "svelte/motion";

    let count = 0;
    const displayedCount = spring();
    $: displayedCount.set(count);
    $: offset = modulo($displayedCount, 1);

    function modulo(n,m) {
        return ((n%m) + m) %m;
    }

</script>

<h1>Counter</h1>
<div class="counter">
    <button on:click={() => (count -= 1)}>
        -
    </button>
    <article style="transform: translate(0, {100 * offset}%)">
        <strong class="hidden" aria-hidden="true">{Math.floor($displayedCount + 1)}</strong>
        <strong class="viewport">{Math.floor($displayedCount)}</strong>
    </article>
    <button on:click={() => (count += 1)}>
        +
    </button>
</div>

<style>
    .counter {
        display: flex;
        font-size: 3em;
        overflow: hidden;
    }

    .hidden {
        display: none;
        top: -1%
    }

    article {
        margin: 0 16px;
        overflow: hidden;
        /* border: 1px solid red; */
    }

    .viewport {
        min-width: 100px;
        display: inline-block;
    }
</style>