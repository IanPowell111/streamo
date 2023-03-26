<template>
    <div class="lg:w-7/12 md:w-5/6 w-full mx-auto">
        <div class="border-1 border-[#333333] p-5 sm:p-[60px]">
            <button id="googleButton" @click="googlelogin">Sign In with Google<slot></slot></button>
            <div id="facebookButton"></div>
            <div id="twitterButton"></div>
            <form @submit.prevent="userLogin">
                <div class="login-input-box">
                    <input type="text" name="user-name" placeholder="Email" class="user-input" v-model="login.username">
                    <input type="password" name="user-password" placeholder="Password" class="user-input" v-model="login.password">
                </div>
                <div class="login-toggle-btn">
                    <input class="mr-1" type="checkbox">
                    <label class="inline-block text-white" for="">Remember me</label>
                    <n-link class=" float-right text-[#ff0000] text-[14px]" to="/register">Forgot Password</n-link>
                </div>
                <div class="button-box">
                    <button class="login-btn btn bg-green-brand mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-green-brand transition-all duration-300" type="submit">
                        <span>Login</span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.user-input{
    @apply border-1 border-[#1e272d] text-white bg-[#1e272d] mb-5 px-2 py-3 w-full text-[14px];
}
#googleButton{
    @apply mb-5 w-full text-[14px] bg-white ;
}
</style>
<script>
import { Auth }  from 'aws-amplify';
export default {
  middleware: 'auth',
  mounted() {
    // initialize Google Sign in  
    // google.accounts.id.initialize({
    //     // client_id: process.env.EMAIL_CLIENT_ID,
    //     // callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
    //     context: 'signin'
    //   })
    
    // // render button
    // google.accounts.id.renderButton(
    //   document.getElementById('googleButton'),
    //   { 
    //     type: 'standard',
    //     size: 'large',
    //     text: 'signin_with',
    //     shape: 'rectangular',
    //     logo_alignment: 'center',
    //     // width: 250,
        
    //   }
    // )
  },
  data() {
    return {
      login: {
        username: '',
        password: '',
        error: null
      }
    }
  },
  methods: {      
    async userLogin() {
      try {
        this.$toast.show('Logging in...')
        const user = await Auth.signIn(this.login.username, this.login.password);
        if(user){
          this.$router.push({ path: '/pricing', redirect: 'pricing'});
          this.$toast.success('Successfully authenticated')
        }
        console.log(user)
      } catch (err) {
        console.log(err);
        this.$toast.error('Error while authenticating')
      }
    },
    async googlelogin() {
    
      // call your backend API here
      const goolgeuser = Auth.federatedSignIn({provider: 'Google'});
      console.log(goolgeuser);
      // the token can be accessed as: response.credential
    }
  }
}
</script>