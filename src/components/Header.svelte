<script>
    import TotalEstimation from "./TotalEstimation.svelte";
</script>

<header>
    <a href="/" alt="home"><h1>Fibonacci Estimator</h1></a>
    <TotalEstimation />
</header>

<style>
    header {
        display: flex;
        place-items: center;
        justify-content: space-between;
        height: var(--header-height);
        width: 100vw;
        background-color: var(--color-background-2);
        border-bottom: 1px solid var(--color-divider);
        position: fixed;
        top: 0;
        padding: var(--unit);
        box-sizing: border-box;
    }

    h1 {
        color: var(--color-white-dim);
        margin: 0;
        width: 165px;
        overflow:hidden;
        font-size: var(--font-size-large);
    }
    a {
        text-decoration: none;
    }
</style>