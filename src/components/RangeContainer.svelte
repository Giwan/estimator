<script>
    export let value; 
</script>
<div class="rangeContainer">
    <input type="range" min="0" max="7" bind:value on:input />
</div>

<style>

:root {
		--range-thumb-color: green;
        --range-thumb-height: 40px;
		--range-track-color: #212121;
		--range-track-radius: var(--unit);
    }

    .rangeContainer {
		grid-column: 1 / -1;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		place-items: center;
	}

	input[type='range'] {
		width: 100%;
		margin: -5.5px 0;
		background-color: transparent;
		-webkit-appearance: none;
	}
	input[type='range']:focus {
		outline: none;
	}
	input[type='range']::-webkit-slider-runnable-track {
		background: var(--range-track-color);
		border: 0.2px solid var(--range-track-color);
		border-radius: var(--unit);
		width: 100%;
		height: 14px;
		cursor: pointer;
	}
	input[type='range']::-webkit-slider-thumb {
		margin-top: -12px;
		width: 20px;
		height: var(--range-thumb-height);
		background-color: var(--range-thumb-color, red);
		border: 1.8px solid #fefefe;
		border-radius: var(--range-track-radius);
		cursor: pointer;
		-webkit-appearance: none;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: #2e2e2e;
	}
	input[type='range']::-moz-range-track {
		background: var(--range-track-color);
		border: 0.2px solid var(--range-track-color);
		border-radius: var(--range-track-radius);
		width: 100%;
		height: 14px;
		cursor: pointer;
	}
	input[type='range']::-moz-range-thumb {
		width: 20px;
		height: var(--range-thumb-height);
		background-color: var(--range-thumb-color, red);
		border: 1.8px solid #fefefe;
		border-radius: 15px;
		cursor: pointer;
	}
	input[type='range']::-ms-track {
		background: transparent;
		border-color: transparent;
		border-width: 0 0;
		color: transparent;
		width: 100%;
		height: 14px;
		cursor: pointer;
	}
	input[type='range']::-ms-fill-lower {
		background: #141414;
		border: 0.2px solid var(--range-track-color);
		border-radius: 2.6px;
	}
	input[type='range']::-ms-fill-upper {
		background: var(--range-track-color);
		border: 0.2px solid var(--range-track-color);
		border-radius: 2.6px;
	}
	input[type='range']::-ms-thumb {
		width: 20px;
        height: var(--range-thumb-height);
		background: var(--range-thumb-color, red);
		border: 1.8px solid #fefefe;
		border-radius: 15px;
		cursor: pointer;
		margin-top: 0px;
		/*Needed to keep the Edge thumb centred*/
	}
	input[type='range']:focus::-ms-fill-lower {
		background: var(--range-thumb-color, red);
	}
	input[type='range']:focus::-ms-fill-upper {
		background: #2e2e2e;
	}
	/*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
how to remove the virtical space around the range input in IE*/
	@supports (-ms-ime-align: auto) {
		/* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
		input[type='range'] {
			margin: 0;
			/*Edge starts the margin from the thumb, not the track as other browsers do*/
		}
	}
</style>