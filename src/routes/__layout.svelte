<main>
    <slot></slot>
</main>

<style>
    :root {
        --unit: 16px;
        --color-white: #fefefe;
        --color-background-1: #dedede;
        --color-background-2: #eeeeee;
        --font-size-large: 24px;
        --color-divider: #cccccc;

    }

    :globa(*) {
        box-sizing: border-box;
    }

    :global(body) {
        background-color:  var(--color-background-2);
        font-family:Arial, Helvetica, sans-serif;
    }
</style>