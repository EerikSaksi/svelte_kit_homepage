<script context="module">
  export const prerender = true;
</script>

<script>
  export let src = "uni.webp";
  export let colors;
  export let explanationText;
  export let leftShift;
</script>

<div class="w-36 md:w-64 pic relative  {leftShift ? leftShift : 'left-1/2'} transform -translate-x-1/2 mt-3 mb-3">
  <div
    class="flex flex-col items-center p-2 rounded-lg ring-4 {colors[5]} animate-pulsing-less"
  >
    <img class="object-cover mb-2 xs:w-full" alt="University of Glasgow" {src} />
    <p class="text-sm text-center md:text-xl ">{explanationText}</p>
  </div>
</div>


<style>
  .animate-pulsing-less {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  @keyframes pulse {
    0%,
    100% {
      opacity: 1
    }
    50% {
      opacity: 0.85
    }
  }
</style>
