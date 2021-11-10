<script>
	import { highestEstimation, averageEstimation, recommendedEstimation } from '../stores/store.js';
</script>

<div class="container">
	<div class="recommended">
        <span class="label">Recommended</span>
        <span class="value">{$recommendedEstimation}</span>
        
    </div>
	<div class="stat">
		<span class="label">Average</span>
        <span>{$averageEstimation}</span>
    </div>
    <div class="stat">
		<span class="label">High</span>
        <span>{$highestEstimation}</span>
	</div>
</div>

<style>
    .container {
        display: grid;
        gap: calc(var(--unit) /2);
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 1fr 1fr;
        width: 100%;
        max-width: 200px;
        background-color: var(--color-dark);
        color: var(--color-white);
        padding: var(--unit);
        border-radius: var(--unit);
    }

    .recommended {
        grid-column: span 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* background-color: green; */
    }

    .recommended .value {
        color: red;
        font-size: 1.2em;
    }

    .stat {
        display: flex;
        place-items: center;
        justify-content: space-between;
        align-items: center;
    }

    .label {
        text-transform: uppercase;
        opacity: 0.5;
        margin-right: calc(var(--unit) /2);
    }

    @media (max-width: 375px) {
        .label {
            font-size: 0.8em;
        }
    }


</style>