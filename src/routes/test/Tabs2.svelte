<script lang="ts" module>
  export type TabState = { tabPanels: SvelteMap<Snippet, object>; activeSnippet: { value: Snippet | null } };
</script>

<script lang="ts">
  import { onMount, setContext, type Snippet } from "svelte";
  import { SvelteMap } from "svelte/reactivity";

  let { children } = $props();

  const tabPanels: SvelteMap<Snippet, object> = $state(new SvelteMap<Snippet, object>());
  let activeSnippet: { value: Snippet | null } = $state({ value: null });

  setContext<TabState>("tabsContext", { tabPanels, activeSnippet });

  onMount(() => {
    if (!activeSnippet.value && tabPanels.size) {
      // get the first element from set
      [activeSnippet.value] = tabPanels.keys();
    }
  });
</script>

<ul class="tab-buttons flex space-x-8 p-2">
  {#each tabPanels.entries() as [panel, attrs] (panel)}
    <li>
      <button class="border" onclick={() => (activeSnippet.value = panel)} {...attrs} class:active={activeSnippet.value === panel}>
        {@render panel?.()}
      </button>
    </li>
  {/each}
</ul>

<!-- Render tab panel contents -->
{@render children()}

<style>
  .tab-buttons button.active {
    font-weight: bold;
  }
</style>
