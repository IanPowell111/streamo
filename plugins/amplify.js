import Vue from 'vue'
import { Amplify, API } from 'aws-amplify';
import config from '../src/aws-exports'
Amplify.configure(config)