<script>
  import "../app.css";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  let y,
    innerHeight = 0,
    innerWidth = 0;
  function goToTop() {
    document.body.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
</script>

<div
  class="relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <div
    class={"fixed bottom-9 w-full duration-200 flex p-10 z-[10] " +
      (y > 0
        ? "opacity-full pointer-events-auto"
        : "pointer-events-none opacity-0")}
  >
    <button on:click={goToTop} class="ml-auto rounded-full bg-slate-900 text-violet-400 px-3 sm:bg-slate-800 cursor-pointer">
      <i class="fa-solid fa-arrow-up" />
    </button>
  </div>
  <Header />
  <slot />
  <Footer />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />
