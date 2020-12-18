<template>
  <div
    class="auth-pane h-screen fixed right-0 bottom-0 top-0 w-5/12 z-0 grid content-center"
  >
    <div class="pl-14">
      <p class="font-bold text-3xl">Sign up</p>
      <small class="text-sm">
        or <a href="#" class="text-blue-500">sign in to your account</a>
      </small>
      <form action="" class="my-10 w-6/12">
        <input
          type="text"
          placeholder="First name"
          class="block border border-gray-300 py-2 px-4 w-full my-6"
        />
        <input
          type="text"
          placeholder="Last name"
          class="block border border-gray-300 py-2 px-4 w-full my-6"
        />
        <input
          type="text"
          placeholder="Email"
          class="block border border-gray-300 py-2 px-4 w-full my-6"
        />
        <input
          type="text"
          placeholder="Password"
          class="block border border-gray-300 py-2 px-4 w-full my-6"
        />
        <span class="flex items-center text-gray-500 my-6">
          <input type="checkbox" name="" class="mr-4" />
          I agree to the
          <a href="#" class="text-blue-600 ml-1"> Dropbox Terms </a>
        </span>
        <button class="bg-blue-600 text-white w-full py-3 mb-3">Sign up</button>
        <button
          class="bg-white text-gray-500 w-full py-3 border border-gray-300 mt-3"
        >
          <span class="flex items-center justify-center">
            <img
              class="mr-2 h-6"
              src="./../assets/google-logo-color-vflpJqkMT.svg"
              alt=""
              srcset=""
            />
            Sign up with Google
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthenticationPanelComponent"
};
</script>

<style lang="scss" scoped>
.auth-pane {
  background: #fff;
}
</style>