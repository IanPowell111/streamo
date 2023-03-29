/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
      id
      name
      videos {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      title
      length
      meta
      type
      views
      shortDescription
      longDescription
      posterImageUrl
      categories {
        nextToken
        startedAt
      }
      postedDateTime
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        length
        meta
        type
        views
        shortDescription
        longDescription
        posterImageUrl
        postedDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideos = /* GraphQL */ `
  query SyncVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        length
        meta
        type
        views
        shortDescription
        longDescription
        posterImageUrl
        postedDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVideoCategories = /* GraphQL */ `
  query GetVideoCategories($id: ID!) {
    getVideoCategories(id: $id) {
      id
      categoriesId
      videoId
      categories {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      video {
        id
        title
        length
        meta
        type
        views
        shortDescription
        longDescription
        posterImageUrl
        postedDateTime
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listVideoCategories = /* GraphQL */ `
  query ListVideoCategories(
    $filter: ModelVideoCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideoCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoriesId
        videoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVideoCategories = /* GraphQL */ `
  query SyncVideoCategories(
    $filter: ModelVideoCategoriesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVideoCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoriesId
        videoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const videoCategoriesByCategoriesId = /* GraphQL */ `
  query VideoCategoriesByCategoriesId(
    $categoriesId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoCategoriesByCategoriesId(
      categoriesId: $categoriesId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoriesId
        videoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const videoCategoriesByVideoId = /* GraphQL */ `
  query VideoCategoriesByVideoId(
    $videoId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVideoCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    videoCategoriesByVideoId(
      videoId: $videoId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoriesId
        videoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
