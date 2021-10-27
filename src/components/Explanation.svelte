<script>
	import { spring } from "svelte/motion";
	import { getExplanation, modulo } from '../utils/helpers';
	export let progressBarValue = 0;

	const displayedExplanation = spring();
	$: displayedExplanation.set(progressBarValue);
	$: offset = modulo($displayedExplanation, 1); 

</script>

<div class="wrapper">
	<article>
		<div class="explanation-digits" style="transform: translate(0, {100 * offset }%)">
			<div aria-hidden="true">{getExplanation($displayedExplanation + 1)}</div>
			<div>{getExplanation($displayedExplanation)}</div>
		</div>
	</article>
</div>

<style>

	.wrapper {
		min-height: 150px;
		grid-column: span 2;
	}
	article {
		margin: calc(var(--unit) * 2) 0;
		position: relative;
		overflow: hidden;
	}

	div[aria-hidden="true"] {
		top: -150%;
		position: absolute;
	}

	.explanation-digits {
		height: 100%;
		width: 100%;
	}
</style>
