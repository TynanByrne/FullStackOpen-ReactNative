import { gql } from 'apollo-boost';

export const SIGN_IN = gql`
  mutation authorize($credentials:  AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const createReview = gql`
  mutation createReview($review: $CreateReviewInput!) {
    createReview(review: $review) {
      id
    user {
      id
      username
      createdAt
    }
    repository {
      name
      ownerName
    }
    userId
    repositoryId
    text
    createdAt
    }
  }
`;