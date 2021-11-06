<script>
    import Header from "../components/Header.svelte";
</script>

<div class="container">
    <Header />
    <main>
        <slot></slot>
    </main>
</div>

<style>
    :root {
        --unit: 16px;
        --color-white: #fefefe;
        --color-white-dim: #555;
        --color-black-dim: rgba(33, 33, 33, 0.5);
        --color-background-1: #dedede;
        --color-background-2: #fefefe;
        --color-divider: #cccccc;
        
        --font-size: 18px;
        --font-size-large: 24px;

        --header-height: 80px;

    }

    :globa() {
        box-sizing: border-box;
    }

    :global(body) {
        background-color:  var(--color-background-2);
        font-family:Arial, Helvetica, sans-serif;
        padding: 0;
        margin: 0;
    }

    .container {
        height: 100vh;
        width: 100vw;
    }

    main {
        margin-top: calc(var(--header-height) + (var(--unit) * 2));
        /* height: calc(100% - var(--header-height)); */
        overflow-y: scroll;
        /* background-color: green; */
    }
</style>