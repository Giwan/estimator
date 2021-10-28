<script>
    import { flip } from "svelte/animate";
  
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
    const shuffle = () => {
      numbers = numbers.sort(() => 0.5 - Math.random());
    };
  </script>
  <main>
    <button on:click={shuffle}>shuffle numbers</button>
    <div>
      {#each numbers as number (number)}
        <p animate:flip>{number}</p>
      {/each}
    </div>
  </main>