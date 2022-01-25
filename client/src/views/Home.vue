<template>
  <header class="homePage">
    <div class="homePage__head">
      <div class="homePage__head-img">
        <img src="../assets/images/train_head.png" alt="" />
      </div>
      <button class="homePage__down" @click="scrollDown">вниз</button>

      <div class="homePage__ellipse-container">
        <div class="homePage__ellipse thin"></div>
        <div class="homePage__ellipse yellow"></div>
      </div>
      <div class="homePage__bg"></div>
    </div>
  </header>
</template>
<script>
// import { TimelineMax } from "gsap/all";
export default {
  name: "Homepage",
  nounted() {
    // let tl = new TimelineMax();
    // tl.fromTo(".homePage__bg", 3, { opacity: 0 }, { opacity: 1 });
    // tl
      // .fromTo(".homePage", 3 , { y: -1000}, {y: 0})
  },
};
</script>
<style lang="scss">
.homePage {
  width: 100%;
  height: 90vh;
  &__head {
    width: 100%;
    height: 90vh;
  }
  &__bg {
    width: 100%;
    height: 90vh;
    background-image: url("https://media.istockphoto.com/photos/aerial-view-of-lake-tahoe-shoreline-with-mountains-and-turquoise-blue-picture-id1302742624");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  & button {
    position: absolute;
    left: 50%;
    bottom: 10%;
  }
  &__head-img {
    width: 350px;
    height: 408px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    z-index: 1;
    & img {
      max-width: 100%;
      width: 100%;
    }
  }
  &__ellipse-container {
    width: 408px;
    height: 408px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    margin: 0 auto;
    z-index: 2;
  }
  &__ellipse {
    position: absolute;
    top: 0;
    border-radius: 50%;
    border-style: solid;
  }
  &__ellipse.thin {
    width: 100%;
    height: 100%;
    border-width: 1px;
    border-color: #494949;
    opacity: 0.5;
  }
  &__ellipse.yellow {
    width: 90%;
    height: 90%;
    border-width: 10px;
    border-color: #FFEB00 transparent;
    transform: rotate(-45deg);
    top: 12px;
    left: 12px;
    animation: ellipseRotate 6s ease-in-out infinite;
  }
}

@keyframes ellipseRotate {
  0% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}
</style>