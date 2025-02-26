<script>
  let { src = undefined, meta = undefined, example, code } = $props();

  // suppress vite-plugin-svelte warning about unused props
  $effect(() => {
    src;
    meta;
  });
</script>

<div class="my-2">
  <div class="flex flex-col w-full overflow-hidden rounded-b-lg">
    <div class="flex overflow-hidden rounded-t-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <div class={['w-full mx-auto bg-linear-to-r bg-white dark:bg-gray-900 p-6', meta.class]}>
        {@render example?.()}
      </div>
    </div>
    <pre class="language-svelte text-sm p-4">{@render code?.()}</pre>
  </div>
</div>
