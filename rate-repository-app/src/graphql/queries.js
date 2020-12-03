import { gql } from 'apollo-boost';
import { REPOSITORY_DETAILS, REVIEW_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int,
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...repositoryDetails
        }
        cursor
      }
      pageInfo {
        endCursor
        startCursor
        totalCount
        hasNextPage
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