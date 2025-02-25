<script>
  let { src = undefined, meta = undefined, example, code } = $props();

  // suppress vite-plugin-svelte warning about unused props
  $effect(() => {
    src;
    meta;
  });
</script>

<div class="root">
  <div class="container">
    <div class="example-wrapper bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
      <div class="example">
        {@render example?.()}
      </div>
    </div>
    <pre class="language-svelte p-4">{@render code?.()}</pre>
  </div>
</div>

<style>
  .root {
    margin: 0.5rem 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: hidden;
    border-bottom-left-radius: var(--example-border-radius, 0.25rem);
    border-bottom-right-radius: var(--example-border-radius, 0.25rem);
  }

  .example-wrapper {
    display: flex;
    justify-content: center;
    overflow: hidden;

    border-top-left-radius: var(--example-border-radius, 0.25rem);
    border-top-right-radius: var(--example-border-radius, 0.25rem);
  }

  .example {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0;
    min-height: 13rem;
  }

  pre {
    margin: 0;
  }
</style>
