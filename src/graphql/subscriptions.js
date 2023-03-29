/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
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
export const onCreateVideoCategories = /* GraphQL */ `
  subscription OnCreateVideoCategories(
    $filter: ModelSubscriptionVideoCategoriesFilterInput
  ) {
    onCreateVideoCategories(filter: $filter) {
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
export const onUpdateVideoCategories = /* GraphQL */ `
  subscription OnUpdateVideoCategories(
    $filter: ModelSubscriptionVideoCategoriesFilterInput
  ) {
    onUpdateVideoCategories(filter: $filter) {
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
export const onDeleteVideoCategories = /* GraphQL */ `
  subscription OnDeleteVideoCategories(
    $filter: ModelSubscriptionVideoCategoriesFilterInput
  ) {
    onDeleteVideoCategories(filter: $filter) {
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
