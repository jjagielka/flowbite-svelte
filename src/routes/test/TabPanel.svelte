<script lang="ts">
  import { getContext, onMount } from "svelte";
  import type { TabState } from "./Tabs2.svelte";

  let { children, title, disabled = false } = $props();

  const { activeSnippet, tabPanels } = getContext<TabState>("tabsContext");

  onMount(() => {
    tabPanels.set(title, { disabled });

    return () => {
      tabPanels.delete(title);
    };
  });
</script>

<!-- Show default slot content if this panel is active -->
{#if activeSnippet.value === title}
  <div class="tab-content">
    {@render children()}
  </div>
{/if}
