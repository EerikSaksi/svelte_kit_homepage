<script context="module">
  export const prerender = true;
</script>

<script>
  import { onMount } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import LeftHandIcons from "./_icons/left_hand.svelte";
  import RightHandIcons from "./_icons/right_hand.svelte";
  import UniTimeline from "./_timeline/timeline.svelte";
  import UrosTimeline from "./_timeline/uros_timeline.svelte";
  import * as animateScroll from "svelte-scrollto";
  let CarouselWithTechnologies;
  let intersecting;
  let element;
  $: if (intersecting) {
    arrowVisible = false;
    console.log("imported");
    import("./_carousel/carousel_with_technologies.svelte").then((module) => {
      CarouselWithTechnologies = module.default;
    });
  }
  let arrowVisible = false;
  onMount(() => {
    const interval = setInterval(() => {
      arrowVisible = true;
      clearInterval(interval);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
</script>

<main>
  <div class="flex flex-col h-screen md:mx-auto md:container b">
    <div class="flex-1 text-sm grid-flow-col grid grid-rows-2 grid-cols-4 md:grid-cols-3 md:text-3xl place-items-center">
      <LeftHandIcons />
      <img class="h-64 md:h-96 row-span-2 col-span-2 md:col-span-1 " alt="Cartoon Eerik" src="avataaars.svg" />
      <RightHandIcons />
    </div>
    <div class="flex-1">
      <UniTimeline />
      <UrosTimeline />
    </div>
    <button
      class=" {arrowVisible ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'} animate-bounce absolute bottom-10 left-0 w-full text-center"  
      on:click={() => animateScroll.scrollToBottom()}
    >
      Next
      <svg class="w-10 h-10 absolute left-1/2 transform -translate-x-1/2"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
      </svg>
    </button>
  </div>
</main>

<IntersectionObserver {element} threshold={0.3} bind:intersecting once={true}>
  <div bind:this={element} class="flex items-center justify-center h-screen">
    <svelte:component this={CarouselWithTechnologies} />
  </div>
</IntersectionObserver>
