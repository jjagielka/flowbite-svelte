<script>
  import { Fileupload, FloatingLabelInput, Helper, Input, Label, Checkbox, P, Badge, Card } from '$lib';

  const choices = [
    {
      value: 'd',
      label: 'Donatello',
      isChecked: true
    },
    {
      value: 'l',
      label: 'Leonardo',
      isChecked: true
    },
    {
      value: 'm',
      label: 'Michelangelo'
    },
    {
      value: 'r',
      label: 'Raphael'
    }
  ];
  let values = ['d', 'l'];
  let value = 'input value';
</script>

<div class="flex flex-col gap-2 w-48">
  <Label>Input</Label>
  <Input clearable value="some text" />
</div>
<div class="m-4">
  <Label for="with_helper" class="pb-2">Upload file</Label>
  <Fileupload id="with_helper" class="inline-block  w-[25rem] h-[2rem] mb-2 file:bg-violet-500 bg-violet-200 file:py-1" />
  <Helper>SVG, PNG, JPG or GIF (MAX. 800x400px).</Helper>
</div>
<div class="h-12"></div>
<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
  <FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text">Floating filled</FloatingLabelInput>
  <FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text">Floating outlined</FloatingLabelInput>
  <FloatingLabelInput id="floating_standard" name="floating_standard" type="text">Floating standard</FloatingLabelInput>
</div>

<Checkbox {choices} bind:group={values} />
<P>Selected: {values.join(', ')}</P>

<P>
  This is a <Badge>badge</Badge>
</P>
<Card>
  <p>Without clearable: The <code>&lt;input&gt;</code> aligns to the right, the label left. All is fine.</p>
  <div class="flex flex-row justify-between bg-blue-100 items-center gap-2">
    <span>Label:</span><Input class="w-30" {value} />
  </div>
  <p>
    With clearable: The <code>&lt;input&gt;</code>'s container <code>&lt;div class="relative w-full"&gt;</code> expands too much. The result is: The <code>&lt;input&gt;</code> aligns left next to the <code>&lt;label&gt;</code> and the clear-X is outside the <code>&lt;input&gt;</code>
    on the right side.
  </p>
  <div class="flex flex-row justify-between bg-blue-100 items-center gap-2">
    <span>Label:</span><Input class="w-30" {value} clearable />
  </div>
</Card>
