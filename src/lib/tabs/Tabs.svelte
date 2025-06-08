<script lang="ts" module>
  export type TabState = {
    tabPanels: SvelteMap<Snippet, Snippet>;
    activeSnippet: { value: Snippet | null };
    tabStyle: TabsVaraints["tabStyle"];
  };
</script>

<script lang="ts">
  import type { TabsProps } from "$lib/types";
  import clsx from "clsx";
  import { onMount, setContext, type Snippet } from "svelte";
  import { SvelteMap } from "svelte/reactivity";
  import { tabs } from ".";
  import type { TabsVaraints } from "./theme";

  let { children, tabStyle = "none", class: className, contentClass, divider = true, ...restProps }: TabsProps = $props();

  const { base, content, divider: dividerClass } = $derived(tabs({ tabStyle, hasDivider: divider }));

  // Generate a unique ID for the tab panel
  const panelId = `tab-panel-${Math.random().toString(36).substring(2)}`;

  const tabPanels: SvelteMap<Snippet, Snippet> = $state(new SvelteMap<Snippet, Snippet>());

  let activeSnippet: { value: Snippet | null } = $state({ value: null });

  setContext<TabState>("tabsContext", { tabPanels, activeSnippet, tabStyle });

  onMount(() => {
    if (!activeSnippet.value && tabPanels.size) {
      // get the first element from set
      [activeSnippet.value] = tabPanels.keys();
    }
  });

  let dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);
</script>

<ul role="tablist" {...restProps} class={base({ class: clsx(className) })}>
  {@render children()}
</ul>

{#if dividerBool}
  <div class={dividerClass()}></div>
{/if}

<div class={content({ class: clsx(contentClass) })}>
  {#if activeSnippet.value}
    {@render tabPanels.get(activeSnippet.value)?.()}
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
