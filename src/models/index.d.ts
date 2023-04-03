import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly plan?: boolean | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlan = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Plan, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly plan?: boolean | null;
  readonly user?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Plan = LazyLoading extends LazyLoadingDisabled ? EagerPlan : LazyPlan

export declare const Plan: (new (init: ModelInit<Plan>) => Plan) & {
  copyOf(source: Plan, mutator: (draft: MutableModel<Plan>) => MutableModel<Plan> | void): Plan;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly videos?: (VideoCategories | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly videos: AsyncCollection<VideoCategories>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}

type EagerVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly length?: number | null;
  readonly meta?: (string | null)[] | null;
  readonly type?: string | null;
  readonly views?: number | null;
  readonly shortDescription?: string | null;
  readonly longDescription: string;
  readonly posterImageUrl: string;
  readonly categories?: (VideoCategories | null)[] | null;
  readonly postedDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Video, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly length?: number | null;
  readonly meta?: (string | null)[] | null;
  readonly type?: string | null;
  readonly views?: number | null;
  readonly shortDescription?: string | null;
  readonly longDescription: string;
  readonly posterImageUrl: string;
  readonly categories: AsyncCollection<VideoCategories>;
  readonly postedDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Video = LazyLoading extends LazyLoadingDisabled ? EagerVideo : LazyVideo

export declare const Video: (new (init: ModelInit<Video>) => Video) & {
  copyOf(source: Video, mutator: (draft: MutableModel<Video>) => MutableModel<Video> | void): Video;
}

type EagerVideoCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoCategories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoriesId?: string | null;
  readonly videoId?: string | null;
  readonly categories: Categories;
  readonly video: Video;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoCategories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoriesId?: string | null;
  readonly videoId?: string | null;
  readonly categories: AsyncItem<Categories>;
  readonly video: AsyncItem<Video>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoCategories = LazyLoading extends LazyLoadingDisabled ? EagerVideoCategories : LazyVideoCategories

export declare const VideoCategories: (new (init: ModelInit<VideoCategories>) => VideoCategories) & {
  copyOf(source: VideoCategories, mutator: (draft: MutableModel<VideoCategories>) => MutableModel<VideoCategories> | void): VideoCategories;
}