<script>
	import { spring } from "svelte/motion";
	import { getItemExplanation, modulo, TITLES } from '../utils/helpers';
	export let progressBarValue = 0;
	export let title = TITLES.complexity;

	const displayedExplanation = spring();
	$: displayedExplanation.set(progressBarValue);
	$: offset = modulo($displayedExplanation, 1);
	const getExplanation = getItemExplanation(title);

</script>

<div class="wrapper">
	<article>
		<div class="explanation-digits" style="transform: translate(0, {100 * offset }%)">
			<p aria-hidden="true">{getExplanation($displayedExplanation + 1)}</p>
			<p>{getExplanation($displayedExplanation)}</p>
		</div>
	</article>
</div>

<style>

	.wrapper {
		height: 160px;
		overflow: hidden;
		grid-column: span 2;
		/* background-color: red; */
	}
	article {
		margin: calc(var(--unit) * 2) 0;
		position: relative;
		overflow: hidden;
	}


	p {
		display: inline-block;
		font-size: 1.25em;
		overflow: hidden;
		/* background-color: silver; */
	}
	p[aria-hidden="true"] {
		top: -200%;
		position: absolute;
		opacity: 0.1;
	}

	.explanation-digits {
		height: 100%;
		width: 100%;
		overflow: hidden;
	}
</style>
