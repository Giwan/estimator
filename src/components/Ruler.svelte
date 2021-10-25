<script>
    export let blocks = [];

    function getClassName(i) {
        if (i <= 2) return "green"; 
        if (i <= 5) return "blue";
        if (i <= 13) return "tomato";
        if (i > 13) return "red";
    }
</script>
<div>
    {#each blocks as undefined, i }
        <span class={getClassName(i)}></span>
    {/each}
</div>

<style>
    div {
        margin-top: calc(var(--unit) * 2);
        width: 100%;
        grid-column: span 2;
        display: grid;
        grid-template-columns: repeat(20, 1fr);
        justify-content: center;
    }
    span {
        display: inline-block;
        width: 1ch;
        height: 1ch;
        background-color: green;
        border-radius: 50%;
    }

    .green {
        background-color: green;
    }

    .blue {
        background-color: blue;
    }

    .tomato {
        background-color: tomato;
    }

    .red {
        background-color: red;
    }
</style>