import Vue from 'vue'
import { Amplify } from 'aws-amplify';
import config from '../src/aws-exports'
Amplify.configure({config,
    Analytics: {
        disabled: true,
      }})