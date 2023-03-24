<template>
  <div
    class="ml-[10px] sm:ml-[15px] pl-[10px] sm:pl-[15px] relative before:content-[''] before:bg-white before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:transform before:h-5 before:w-[1px]"
  >
    <div v-click-outside="onClickOutside" v-if="isLoggedIn === true">
      <button
        class="min-w-[32px] min-h-[32px] leading-[32px]"
        @click.prevent="displayClass = !displayClass"
      >
        <img src="/images/review/author-01.png" alt="Auth" />
      </button>

      <div
        class="dropdown z-99 w-[160px] p-5 text-left right-auto left-0 md:right-0 md:left-auto bg-white top-[166%] md:top-[195%] absolute border-1 border-[#cccccc] shadow-lg"
        v-if="displayClass"
      >
        <ul class="text-[14px]">
          <li class="mb-2">
            <n-link to="/profile" class="">My Profile</n-link>
          </li>
          <li class="mb-2">
            <n-link to="/account" class="">My Account</n-link>
          </li>
          <li class="mb-2">
            <n-link class="" v-on:click="signOut">Sign Out</n-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import vClickOutside from "v-click-outside";
import { Auth } from "aws-amplify";
// const header = () => (Auth.isUserLoggedIn()) ? <div>Account</div> : <div>Sign In</div>;
export default {
  data() {
    return {
      displayClass: false,
      isLoggedIn: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  async mounted() {
    try {
      curuser = await Auth.currentAuthenticatedUser();
      if(curuser){
        this.isLoggedIn = true;
        console.log(this.isLoggedIn);
      }else{
        this.isLoggedIn = false;
      }
    } catch {
      this.isLoggedIn = false;
    }
  },
  methods: {
    onClickOutside(event) {
      this.displayClass = false;
    },
    async signOut() {
      try {
        Auth.signOut();
        this.$router.push({ path: "/login", redirect: "login" });
        this.$toast.success("Successfully logout");
      } catch (err) {
        this.$toast.error(err);
      }
    },
  },
};
</script>

<style lang="scss"></style>
