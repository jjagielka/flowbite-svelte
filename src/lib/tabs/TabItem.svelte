<script lang="ts">
  import { tabItem, type TabitemProps } from "$lib";
  import { createRawSnippet, getContext, onMount } from "svelte";
  import type { TabState } from "./Tabs.svelte";

  let { children, titleSlot, open = false, title = "Tab title", activeClass, inactiveClass, class: className, ...restProps }: TabitemProps = $props();

  const { activeSnippet, tabPanels, tabStyle } = getContext<TabState>("tabsContext");

  let { base, button, active, inactive } = $derived(tabItem({ tabStyle }));

  const simpleSnippet = (name: string) =>
    createRawSnippet(() => ({
      render: () => `<span>${name}</span>`
    }));

  let titleSnippet = titleSlot ?? simpleSnippet(title);

  onMount(() => {
    tabPanels.set(titleSnippet, children ?? simpleSnippet(""));

    return () => {
      tabPanels.delete(titleSnippet);
    };
  });
</script>

<li role="presentation" class={base()}>
  <button type="button" role="tab" {...restProps} onclick={() => (activeSnippet.value = titleSnippet)} class={[button(), activeSnippet.value === titleSnippet ? active() : inactive()]}>
    {@render titleSnippet()}
  </button>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabitemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1689)
## Props
@prop children
@prop titleSlot
@prop open = false
@prop title = "Tab title"
@prop activeClass
@prop inactiveClass
@prop class: className
@prop disabled
@prop tabStyle
@prop ...restProps
-->
