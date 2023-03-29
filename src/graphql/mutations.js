/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
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
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
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
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
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
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
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
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
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
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
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
export const createVideoCategories = /* GraphQL */ `
  mutation CreateVideoCategories(
    $input: CreateVideoCategoriesInput!
    $condition: ModelVideoCategoriesConditionInput
  ) {
    createVideoCategories(input: $input, condition: $condition) {
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
export const updateVideoCategories = /* GraphQL */ `
  mutation UpdateVideoCategories(
    $input: UpdateVideoCategoriesInput!
    $condition: ModelVideoCategoriesConditionInput
  ) {
    updateVideoCategories(input: $input, condition: $condition) {
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
export const deleteVideoCategories = /* GraphQL */ `
  mutation DeleteVideoCategories(
    $input: DeleteVideoCategoriesInput!
    $condition: ModelVideoCategoriesConditionInput
  ) {
    deleteVideoCategories(input: $input, condition: $condition) {
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
