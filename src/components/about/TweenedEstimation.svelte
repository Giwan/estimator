<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';

	const fibRange = [0, 1, 2, 3, 5, 8, 13, 20];
	const estimation = tweened(0, {
		duration: 250,
        easing: cubicOut
	});

	function handleClick(e) {
		$estimation = fibRange[e.currentTarget.value];
	}
</script>

<h1>
	{Number.parseFloat($estimation).toPrecision(3)}
	<!-- {Math.round($estimation)} -->
</h1>
<div class="container">
<input type="range" min="0" max="7" on:input={handleClick} />
</div>

<style>

    h1 {
        width: 100%;
        text-align: center;
        font-size: 3em;
    }
    .container {
        width: 80%;
        margin: var(--unit) auto;
        /* background-color: red; */
    }
    input[type="range"] {
        width: 100%;
        
    }
</style>
