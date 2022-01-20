<template>
  <header class="homePage">
    <div class="homePage__head">
      <div class="homePage__head-img">
        <img src="../assets/train_head.png" alt="" />
      </div>
      <button @click="scrollDown">вниз</button>

      <div class="homePage__ellipse-container">
        <div class="homePage__ellipse thin"></div>
        <div class="homePage__ellipse yellow"></div>
      </div>
      <div class="homePage__bg"></div>
    </div>
  </header>
</template>
<script>
// import * as gsap from "gsap/all";
export default {
  name: "Homepage",
  created() {
    // let tl = new TimelineMax();
    // tl.fromTo(".homePage__bg", 3, { opacity: 0 }, { opacity: 1 });
  },
};
</script>

 <style>

</style>