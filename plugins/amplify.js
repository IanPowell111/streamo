// plugins/amplify.js
import Vue from 'vue'
import '@aws-amplify/ui-vue'
import Amplify, { Auth } from 'aws-amplify'
Amplify.configure({
    aws_project_region: 'us-east-1' // (optional) Default region for project
  });
Vue.prototype.$Amplify = Amplify