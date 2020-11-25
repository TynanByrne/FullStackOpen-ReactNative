import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES{
    repositories {
      edges {
        node {
          ...repositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const AUTHORIZED_USER = gql`
  query AUTHORIZED_USER {
    authorizedUser {
      id
      username
    }
  }
`;

export const FETCH_REPO = gql`
  query FETCH_REPO($id: ID!) {
    repository(id: $id) {
      url
      ...repositoryDetails
    }
  }
  ${REPOSITORY_DETAILS}
`