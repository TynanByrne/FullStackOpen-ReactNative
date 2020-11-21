import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES{
    repositories {
      edges {
        node {
          id
          name
          user {
            username
          }
          fullName
          ratingAverage
          reviewCount
          url
          stargazersCount
          forksCount
          description
          ownerAvatarUrl
        }
      }
    }
  }
`;