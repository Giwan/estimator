<script>
    import Card from "../components/Card2.svelte"; 
    import { TITLES } from "../utils/helpers";
</script>

<h1>Fibonacci Estimator</h1>
<a href="/about">About</a>
<main>
    <Card title={TITLES.complexity} />
</main>

<style>
    h1 {
        color: slategray;
    }

    main {
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--unit);
        margin: var(--unit); */
    }
</style>
