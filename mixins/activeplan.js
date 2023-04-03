import { Auth } from 'aws-amplify';
import { DataStore } from '@aws-amplify/datastore';
import { Plan } from '../src/models';
export default {
  async mounted() {
    // if (this.$store.state.account.authorized) {
    //   return
    // }

    try {
      let user = await Auth.currentAuthenticatedUser({ bypassCache: false })
      const models = await DataStore.query(Plan, p => p.user.eq(user.username));
    //   alert(user.username);
      if (!models.length || models.length && !models[0].plan) {
        this.$router.push('/pricing')
      }
    } catch (err) {
      this.$router.push('/pricing')
    }
  }
}