<script context="module">
  export const prerender = true;
</script>

<script>
  import Ball from "./ball.svelte";
  import Explanation from "./explanation.svelte";
  export let colors = [
    "from-green-200",
    "via-green-500",
    "to-green-200",
    "from-green-500",
    "to-green-500",
    "ring-green-500",
    "text-green-500",
  ];
  export let src;
  export let explanationOnTop = true;
  export let explanationText = "MSci in Computing";
  export let widths = "w-2/3 md:w-full";
  export let dates = ["2018", "2022"];
  export let leftShift;
</script>

<div class="flex flex-col ">
  {#if explanationOnTop}
    <Explanation {src} {colors} {explanationText} {leftShift} />
  {/if}
  <div class="relative flex justify-center m-3 animate-pulsing">
    <div class="flex flex-row {widths} absolute {leftShift ? leftShift + ' transform -translate-x-1/2 ' : ''}">
      <Ball {colors} date={dates[0]} />
      <div class="h-3 w-full  rounded bar ease-in-out transition-all bg-gradient-to-r {colors[0]} {colors[1]} {colors[2]}" />
      <Ball isRight={true} {colors} date={dates[1]} />
    </div>
  </div>
  {#if !explanationOnTop}
    <Explanation {src} {colors} {explanationText} {leftShift} />
  {/if}
</div>

<style>
  .animate-pulsing {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1
    }
    50% {
      opacity: 0.8
    }
  }
</style>
