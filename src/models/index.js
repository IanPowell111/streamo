// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Plan, Categories, Video, VideoCategories } = initSchema(schema);

export {
  Plan,
  Categories,
  Video,
  VideoCategories
};