import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
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
      reviews {
        edges {
          node {
            ...reviewDetails
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
  ${REVIEW_DETAILS}
`