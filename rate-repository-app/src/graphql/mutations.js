import { gql } from 'apollo-boost';
import { REVIEW_DETAILS } from './fragments';

export const SIGN_IN = gql`
  mutation authorize($credentials:  AuthorizeInput!) {
    authorize(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($review: CreateReviewInput!) {
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
  ${REVIEW_DETAILS}
`;