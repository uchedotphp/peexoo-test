<template>
  <div class="bg-blue-900 py-20">
    <div class="max-w-screen-xl mx-auto">
      <p class="mb-10 ml-5 text-yellow-200 font-bold text-6xl max-w-screen-md">
        File storage and sharing are just the beginning
      </p>
      <div class="grid text-white">
        <div class="">
          <a
            href="#one"
            class="border-transparent border-l-2 border-yellow-200 pl-5 mb-6 block"
          >
            <p class="font-bold text-3xl mb-6">Be organized</p>
            <p class="text-xl">
              Bring traditional files, cloud content, Dropbox Paper docs, and
              web shortcuts together in one place—and work the way that works
              for you.
            </p>
          </a>
          <a
            href="#two"
            class="border-transparent border-l-2 pl-5 mb-6 block text-gray-400 hover:text-white"
          >
            <p class="font-bold text-3xl mb-6">Stay focused</p>
            <p class="text-xl">
              Personalized suggestions give you files and folders when you need
              them so you spend less time searching.
            </p>
          </a>
          <a
            href="#three"
            class="border-transparent border-l-2 pl-5 mb-6 block text-gray-400 hover:text-white"
          >
            <p class="font-bold text-3xl mb-6">Get in sync</p>
            <p class="text-xl">
              Coordinate with your team and push projects forward with the tools
              you use every day—all within Dropbox.
            </p>
          </a>
        </div>
        <div class="ml-16 -mt-8">
          <div id="one" class="h-full">
            <img
              src="./../assets/images/home-producttour-organized-en-vflGKUjXB.png"
              alt=""
              srcset=""
            />
          </div>
          <div id="two" class="h-full">
            <img
              src="./../assets/images/home-producttour-focused-en-vflpskGfi.png"
              alt=""
              srcset=""
            />
          </div>
          <div id="three" class="h-full">
            <img
              src="./../assets/images/home-producttour-insync-en-vflBwDdvq.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);
export default {
  name: "FeatureTwoComponent",
};
</script>

<style lang="scss" scoped>
.grid {
  grid-template-columns: 30% 70%;
}
</style>