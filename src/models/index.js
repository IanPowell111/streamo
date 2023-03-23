// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categories, Video, VideoCategories } = initSchema(schema);

export {
  Categories,
  Video,
  VideoCategories
};