<script lang="ts">
  import { fly } from "svelte/transition";

  let { children, transition = undefined } = $props();

  let transitionSlideIn = $derived({
    x: "100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: 1500
  });

  let transitionSlideOut = $derived({
    x: "-100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: 1500
  });
</script>

{#if transition}
  {#key children}
    <div class="transition-hack" transition:transition>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/key}
{:else}
  {#key children}
    <div class="transition-hack" in:fly={transitionSlideIn} out:fly={transitionSlideOut}>
      {#if children}
        {@render children()}
      {/if}
    </div>
  {/key}
{/if}

<style>
  .transition-hack {
    grid-area: 1/1/2/2;
  }
</style>
