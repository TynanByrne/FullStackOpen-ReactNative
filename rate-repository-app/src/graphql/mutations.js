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
      user {
        username
      }
      repositoryId
      ...reviewDetails
    }
  }
  ${REVIEW_DETAILS}
`;