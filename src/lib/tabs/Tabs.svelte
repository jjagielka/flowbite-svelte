<script lang="ts" module>
  export type TabState = {
    tabPanels: SvelteMap<Snippet, Snippet>;
    activeSnippet: { value: Snippet | null };
    styling: { tabStyle: TabsVaraints["tabStyle"]; vertical: boolean };
  };
</script>

<script lang="ts">
  import type { TabsProps } from "$lib/types";
  import clsx from "clsx";
  import { onMount, setContext, type Snippet } from "svelte";
  import { SvelteMap } from "svelte/reactivity";
  import { tabs } from ".";
  import type { TabsVaraints } from "./theme";
  import { fly } from "svelte/transition";
  import TabContent from "./TabContent.svelte";

  let { children, tabStyle = "none", vertical = false, class: className, contentClass, ...restProps }: TabsProps = $props();

  const { base, ul, content } = $derived(tabs({ tabStyle, vertical }));

  // Generate a unique ID for the tab panel
  const panelId = `tab-panel-${Math.random().toString(36).substring(2)}`;

  const tabPanels: SvelteMap<Snippet, Snippet> = $state(new SvelteMap<Snippet, Snippet>());

  let activeSnippet: { value: Snippet | null } = $state({ value: null });
  let styling = $state({ tabStyle, vertical });

  $effect(() => {
    styling.tabStyle = tabStyle;
    styling.vertical = vertical;
  });

  setContext<TabState>("tabsContext", { tabPanels, activeSnippet, styling });

  onMount(() => {
    if (!activeSnippet.value && tabPanels.size) {
      // get the first element from set
      [activeSnippet.value] = tabPanels.keys();
    }
  });

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

{#snippet _content(snip?: Snippet)}
  {#if snip}
    <TabContent children={snip}></TabContent>
  {/if}
{/snippet}

<div class={base({ class: clsx(className) })}>
  <ul role="tablist" {...restProps} class={ul()}>
    {@render children()}
  </ul>

  {#if activeSnippet.value}
    <div class={content({ class: clsx(contentClass) })}>
      {@render _content(tabPanels.get(activeSnippet.value))}
    </div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1681)
## Props
@prop children
@prop tabStyle = "none"
@prop ulClass
@prop contentClass
@prop divider = true
@prop ...restProps
-->

<style>
  .transition-hack {
    grid-area: 1/1/2/2;
  }
</style>
