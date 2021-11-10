<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<div class="container">
    <Header />
    <main>
        <slot></slot>
        <!-- <Footer /> -->
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
        --color-dark: #212121;
        
        --font-size: 18px;
        --font-size-large: 24px;

        --header-height: 100px;
        --footer-height: 100px; 
        --max-width: 600px;

    }

    :global() {
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
        overflow: hidden;
    }

    main {
        margin-top: calc(var(--header-height) + (var(--unit) * 2));
        height: calc(100vh - var(--header-height));
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 0 var(--unit);
        /* background-color: green; */
    }
</style>