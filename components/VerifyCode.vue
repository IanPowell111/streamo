<template>
  <div class="lg:w-7/12 md:w-5/6 w-full mx-auto">
    <div class="border-1 border-[#333333] p-5 sm:p-[60px]">
      <div >
        <div class="login-input-box">
          <input
            type="text"
            name="code"
            placeholder="Code"
            class="user-input"
            v-model="login.code"
          />
        </div>
        <div class="button-box">
          <button
            class="login-btn btn bg-green-brand mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-green-brand transition-all duration-300"
            v-on:click="sendCode"
          >
            <span>Verify Code</span>
          </button>
          <button
            class="login-btn btn bg-green-brand mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-green-brand transition-all duration-300"
            v-on:click="resendCode"
          >
            <span>Resend verification code to email</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.user-input {
  @apply border-1 border-[#1e272d] text-white bg-[#1e272d] mb-5 px-2 py-3 w-full text-[14px];
}
#googleButton {
  @apply mb-5 w-full text-[18px] bg-white p-3;
}
</style>
<script>
import { Auth } from "aws-amplify";
export default {
  middleware: "auth",
  mounted() {},
  data() {
    return {
      login: {
        code: "",
        error: null,
      },
    };
  },
  methods: {
    async sendCode() {
      try {
        // try to confirm the code
        var username = sessionStorage.getItem("email");
        var code = this.login.code;
        console.log(`username is ${username} and code is : ${this.login.code}`);
        await Auth.confirmSignUp(username, code, {});
        // If successful, sign user in
        var user = await Auth.signIn({
          username: username,
          password: sessionStorage.getItem("password"),
        });
        sessionStorage.setItem("user", user);

        this.$router.push({ path: "/pricing", redirect: "pricing" });
      } catch (error) {
        if(error.message === 'Incorrect username or password.'){
          this.$router.push({path: '/login', redirect: 'login'});
        }
        else {
          console.log("error resending code: ", error.message);
          this.$toast.error(error.message);
        }
      }
    },
    async resendCode() {
      try {
        await Auth.resendSignUp(sessionStorage.getItem('email'));
        console.log("code resent successfully");
        this.$toast.success("code resent successfully");
      } catch (error) {
        console.log("error", error.message);
        this.$toast.error(error.message);
      }
    },
  },
};
</script>
