<script context="module">
  export const prerender = true;
</script>

<script>
  import Timeline from "./timeline.svelte";
</script>

<Timeline
  leftShift="left-1/4"
  dates={["Jun 2019", "Aug 2019"]}
  widths="w-2/72 md:w-1/24"
  explanationText="Software Engineer Intern"
  explanationOnTop={false}
  src="uros.webp"
  colors={["from-red-200", "via-red-500", "to-red-200", "from-red-500", "to-red-500", "ring-red-500", "text-red-500"]}
/>
