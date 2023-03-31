import { Auth } from 'aws-amplify'

export default {
  async mounted() {
    // if (this.$store.state.account.authorized) {
    //   return
    // }

    try {
      let user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      if (!user) {
        this.$router.push('/login')
      }
    } catch (err) {
      this.$router.push('/login')
    }
  }
}