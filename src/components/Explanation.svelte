<script>
	import { getExplanation } from '../utils/helpers';
	export let progressBarValue = 0;
</script>

<article>
	<p>{getExplanation(progressBarValue)}</p>
</article>

<style>
	article {
        grid-column: span 2;
		margin-bottom: calc(var(--unit) * 2);
        min-height: 150px;
	}
</style>
