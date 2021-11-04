<script>
    import Card from "../components/Card2.svelte"; 
    import { TITLES } from "../utils/helpers";
</script>

<h1>Fibonacci Estimator</h1>
<a href="/about">About</a>
<main>
    <Card title={TITLES.complexity} />
    <Card title={TITLES.risks} />
    <Card title={TITLES.uncertainty} />
</main>

<style>
    h1 {
        color: slategray;
    }

    main {
        margin: 0 auto calc(var(--unit) * 10);
        max-width: 600px; 
    }
</style>
