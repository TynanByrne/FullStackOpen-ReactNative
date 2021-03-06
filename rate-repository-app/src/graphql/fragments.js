import { gql } from 'apollo-boost';

export const REPOSITORY_DETAILS = gql`
  fragment repositoryDetails on Repository {
    id
    fullName
    description
    language
    forksCount
    ratingAverage
    stargazersCount
    ownerAvatarUrl
    reviewCount
  }
`;

export const REVIEW_DETAILS = gql`
  fragment reviewDetails on Review {
    id
    rating
    createdAt
    text
  }
`;