<script lang="ts">
  import { getAllContexts, getContext } from "svelte";

  let { children } = $props();

  let title = getContext("tabTitle");
  //   title.value = children;

  $inspect("T", title);

  console.log(getAllContexts());
</script>
