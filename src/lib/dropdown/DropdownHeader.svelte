<script lang="ts">
  import { dropdownHeader } from ".";
  import { type DropdownHeaderProps, cn } from "$lib";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();
</script>

<div {...restProps} class={cn(dropdownHeader(), className)}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L609)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
