import { Auth } from 'aws-amplify';
// import { API } from 'aws-amplify';
// import { getPlan } from './graphql/mutations';
// import { GraphQLQuery } from '@aws-amplify/api';
// import { GetTodoQuery } from './API';
export default {
  async mounted() {
    // if (this.$store.state.account.authorized) {
    //   return
    // }

    try {
      let user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      alert(user.username);
      if (!user) {
        this.$router.push('/login')
      }
    } catch (err) {
      this.$router.push('/login')
    }
  }
}