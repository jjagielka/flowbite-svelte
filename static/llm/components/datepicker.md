# Svelte Datepicker - Flowbite


The Datepicker component provides an interactive calendar interface for selecting single dates or date ranges. It's fully integrated with flowbite-svelte's design system and offers various customization options.

## Setup

```svelte
<script>
  import { Datepicker } from "flowbite-svelte";
</script>
```

## Default Datepicker

Use the Datepicker for single date selection. The selected date is bound to the `value` prop.

```svelte
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} color="green" />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>
```

## Date Range Selection

Enable date range selection using the `range` prop. The start and end dates are bound to `rangeFrom` and `rangeTo` respectively.

```svelte
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";

  let dateRange: { from: Date | undefined; to: Date | undefined } = $state({
    from: undefined,
    to: undefined
  });
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker range bind:rangeFrom={dateRange.from} bind:rangeTo={dateRange.to} color="pink" />
  <P class="mt-4">
    Selected range:
    {dateRange.from ? dateRange.from.toLocaleDateString() : "None"} -
    {dateRange.to ? dateRange.to.toLocaleDateString() : "None"}
  </P>
</div>
```

## Inline Datepicker

Use the `inline` prop to display the calendar without a popup.

```svelte
<script lang="ts">
  import { Datepicker, P } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
</script>

<div class="md:w-1/2">
  <Datepicker inline bind:value={selectedDate} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
</div>
```

## Custom Color

Customize the primary color of the Datepicker using the `color` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker color="red" />
</div>
```

## Localization

Set a specific locale for date formatting using the `locale` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker locale="fr-FR" />
</div>
```

## Custom Date Format

Specify a custom date format using the `dateFormat` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker dateFormat={{ year: "numeric", month: "short", day: "2-digit" }} />
</div>
```

## Action Buttons

Add action buttons (Today, Clear, Apply) using the `showActionButtons` prop. You can also listen for the `clear` and `apply` events to perform specific actions when these buttons are clicked.

```svelte
<script lang="ts">
  import { Datepicker, P, type DateOrRange } from "flowbite-svelte";
  let selectedDate = $state<Date | undefined>(undefined);
  let lastAction = $state<string | undefined>();

  function handleClear() {
    lastAction = "Cleared";
  }

  function handleApply(detail: DateOrRange): void {
    lastAction = "Applied";
    if (detail instanceof Date) {
      selectedDate = detail;
    }
  }
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker bind:value={selectedDate} showActionButtons autohide={false} onclear={handleClear} onapply={handleApply} />
  <P class="mt-4">Selected date: {selectedDate ? selectedDate.toLocaleDateString() : "None"}</P>
  <P class="mt-2">Last action: {lastAction}</P>
</div>
```

## Custom Title

Add a custom title to the Datepicker using the `title` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker title="Select your preferred date" />
</div>
```

## Disabled State

Use the `disabled` prop to disable the Datepicker.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker disabled />
</div>
```

## Required Field

Mark the Datepicker as a required field using the `required` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker required />
</div>
```

## Custom First Day of Week

Set a custom first day of the week using the `firstDayOfWeek` prop.

```svelte
<script lang="ts">
  import { Datepicker } from "flowbite-svelte";
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker firstDayOfWeek={3} />
</div>
```

## Event Handling

Listen for date selection events using the `onselect` event.

```svelte
<script lang="ts">
  import { Datepicker, type DateOrRange } from "flowbite-svelte";

  function handleDateSelect(detail: DateOrRange) {
    console.log("Selected date:", detail);
  }
</script>

<div class="mb-64 md:w-1/2">
  <Datepicker onselect={handleDateSelect} />
</div>
```

## Component data

### Datepicker

#### Types

[DatepickerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L483)

#### Props

- value: $bindable()
- defaultDate: null
- range: false
- rangeFrom: $bindable()
- rangeTo: $bindable()
- locale: "default"
- firstDayOfWeek: 0
- dateFormat
- placeholder: "Select date"
- disabled: false
- required: false
- inputClass: ""
- color: "primary"
- inline: false
- autohide: true
- showActionButtons: false
- title: ""
- onselect
- onclear
- onapply
- btnClass
- class: className


## References

- [Flowbite Datepicker (JavaScript)](https://flowbite.com/docs/plugins/Datepicker/)


