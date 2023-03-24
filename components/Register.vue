<template>
    <div class="lg:w-7/12 md:w-5/6 w-full mx-auto">
        <div class="border-1 border-[#333333] p-5 sm:p-[60px]">
            <div id="googleButton"></div>
            <form @submit.prevent="signUp">
                <div class="login-input-box">
                    <input type="text" name="user-name" placeholder="Email" class="user-input" v-model="register.username">
                    <input type="password" name="user-password" placeholder="Password" class="user-input" v-model="register.password">
                    <input type="email" name="email" placeholder="Confirm Email" class="user-input" v-model="register.email">
                </div>
                <div class="button-box">
                    <button class="login-btn btn bg-green-brand mt-5 py-2 px-[30px] text-white font-semibold text-[14px] hover:bg-white hover:text-green-brand transition-all duration-300" type="submit">
                        <span>Register</span>
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
    @apply mb-5;
}
</style>
<script>
import { Auth }  from 'aws-amplify';
export default {
  middleware: 'auth',
  mounted() {
    // initialize Google Sign in  
    google.accounts.id.initialize({
        client_id: process.env.EMAIL_CLIENT_ID,
        callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
        context: 'signup'
      })
    
    // render button
    google.accounts.id.renderButton(
      document.getElementById('googleButton'),
      { 
        type: 'standard',
        size: 'large',
        text: 'signup_with',
        shape: 'rectangular',
        logo_alignment: 'center',
        // width: 250,
        
      }
    )
  },
  data() {
    return {
      register: {
        username: '',
        email:'',
        password: ''
      }
    }
  },
  methods: {      
    async signUp() {
        try {
            const user = await Auth.signUp({
                username: this.register.username,
                password: this.register.password,
                attributes: {
                    email: this.register.email,          // optional
                    // other custom attributes 
                },
                autoSignIn: { // optional - enables auto sign in after user is confirmed
                    enabled: true,
                }
            });
            console.log(user);
            this.$toast.success('Successfully registered');
        } catch (error) {
            console.log('error signing up:', error);
            this.$toast.error('Error while registering');
        }
    },
    handleCredentialResponse(response) {
    
    // call your backend API here
    
    // the token can be accessed as: response.credential
  }
}
}
</script>