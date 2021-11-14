<script>
	import TotalEstimation from './TotalEstimation.svelte';
</script>

<header>
	<div class="headerContainer">
		<a href="/" alt="home"><h1>Fibonacci Estimator</h1></a>
		<TotalEstimation />
	</div>
</header>

<style>
	header {
		height: var(--header-height);
		width: 100vw;
		background-color: var(--color-background-2);

		position: fixed;
		top: 0;
		padding: var(--unit);
		box-sizing: border-box;
	}

	.headerContainer {
		max-width: 600px;
		margin: 0 auto;
		display: flex;
		place-items: center;
		justify-content: space-between;
		/* background-color: #212121; */
		background-color: #fefefe;
		padding: var(--unit);
		border-radius: calc(var(--unit) /2);
		box-shadow: 0px 4.5px 2.7px rgba(0, 0, 0, 0.1), 0px 12.5px 7.5px rgba(0, 0, 0, 0.065),
			0px 30.1px 18.1px rgba(0, 0, 0, 0.05), 0px 100px 60px rgba(0, 0, 0, 0.035);
		/* border-bottom: 1px solid var(--color-divider); */
	}

	h1 {
		color: var(--color-white-dim);
		margin: 0;
		width: 165px;
		overflow: hidden;
		font-size: var(--font-size-large);
	}
	a {
		text-decoration: none;
		overflow: hidden;
	}

	@media (max-width: 375px) {
		h1 {
			font-size: var(--font-size);
		}
	}
</style>
