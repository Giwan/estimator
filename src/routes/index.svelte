<script>
    import Card from "../components/Card2.svelte"; 
    import { TITLES } from "../utils/helpers";
</script>

<main>
    <Card title={TITLES.complexity} />
    <Card title={TITLES.risks} />
    <Card title={TITLES.uncertainty} />
</main>

<style>

    main {
        margin: 0 auto calc(var(--unit) * 10);
        max-width: 600px; 
    }
</style>
