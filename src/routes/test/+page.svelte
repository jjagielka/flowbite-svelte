<script>
  import Tabs2 from "./Tabs2.svelte";
  import TabPanel from "./TabPanel.svelte";
  import TabItem from "$lib/tabs/TabItem.svelte";
  import Tabs from "$lib/tabs/Tabs.svelte";
  import TabTitle from "$lib/tabs/TabTitle.svelte";
</script>

<div class="flex justify-center">
  <Tabs>
    <TabItem open>
      <TabTitle>Profile</TabTitle>

      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Profile:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Settings">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Settings:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Users">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Users:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem title="Dashboard">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Dashboard:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
    <TabItem disabled>
      {#snippet titleSlot()}
        <span class="text-gray-400 dark:text-gray-500">Disabled</span>
      {/snippet}
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <b>Disabled:</b>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </TabItem>
  </Tabs>
</div>

<Tabs2>
  <TabPanel>
    {#snippet title()}
      <strong>Dashboard</strong>
      <br />
      <small>Status overview</small>
    {/snippet}
    <div>This is the dashboard content.</div>
  </TabPanel>

  <TabPanel>
    {#snippet title()}
      <strong>Settings</strong>
      <br />
      <small>Status overview</small>
    {/snippet}
    <div>This is the status content.</div>
  </TabPanel>

  <TabPanel disabled>
    {#snippet title()}
      <strong>Reports</strong>
      <br />
      <small>Monthly analytics</small>
    {/snippet}
    <div>Here are the reports.</div>
  </TabPanel>
</Tabs2>
