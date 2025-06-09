<script lang="ts">
  import { tabItem, type TabitemProps } from "$lib";
  import { createRawSnippet, getContext, onMount, setContext } from "svelte";
  import type { TabState } from "./Tabs.svelte";

  let { children, titleSlot, open = false, title = "Tab title (default)", activeClass, inactiveClass, class: className, ...restProps }: TabitemProps = $props();

  const simpleSnippet = (name: string) =>
    createRawSnippet(() => ({
      render: () => `<span>${name}</span>`
    }));

  let finalTtile = $state({ value: simpleSnippet(title) });

  setContext("tabTitle", finalTtile);
  $inspect(finalTtile);

  const { activeSnippet, tabPanels, styling } = getContext<TabState>("tabsContext");

  let { base, button, active, inactive } = $derived(tabItem({ tabStyle: styling.tabStyle, vertical: styling.vertical }));

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
