import React from 'react';
import RepositoryListContainer from './RepositoryListContainer'
import { render } from '@testing-library/react-native';
import { converter } from './RepoItemInfo'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };
      
      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      )
      const edges = repositories.edges;
      const firstRepository = edges[0].node;
      const secondRepository = edges[1].node;
      
      const repoNames = getAllByTestId('fullName')
      const firstRepoName = repoNames[0]
      const secondRepoName = repoNames[1]
      expect(firstRepoName).toHaveTextContent(firstRepository.fullName);
      expect(secondRepoName).toHaveTextContent(secondRepository.fullName);

      const repoDescriptions = getAllByTestId('description');
      const firstRepoDescription = repoDescriptions[0];
      const secondRepoDescription = repoDescriptions[1];
      expect(firstRepoDescription).toHaveTextContent(firstRepository.description);
      expect(secondRepoDescription).toHaveTextContent(secondRepository.description);

      const repoLanguages = getAllByTestId('language');
      const firstRepoLanguage = repoLanguages[0];
      const secondRepoLanguage = repoLanguages[1];
      expect(firstRepoLanguage).toHaveTextContent(firstRepository.language);
      expect(secondRepoLanguage).toHaveTextContent(secondRepository.language);
      
      const repoForks = getAllByTestId('forksCount');
      const firstRepoForks = repoForks[0];
      const secondRepoForks = repoForks[1];
      expect(firstRepoForks).toHaveTextContent(converter(firstRepository.forksCount));
      expect(secondRepoForks).toHaveTextContent(converter(secondRepository.forksCount));

      const repoStargazers = getAllByTestId('stargazersCount');
      const firstRepoStargazers = repoStargazers[0];
      const secondRepoStargazers = repoStargazers[1];
      expect(firstRepoStargazers).toHaveTextContent(converter(firstRepository.stargazersCount));
      expect(secondRepoStargazers).toHaveTextContent(converter(secondRepository.stargazersCount));

      const repoRatings = getAllByTestId('ratingAverage');
      const firstRepoRating = repoRatings[0];
      const secondRepoRating = repoRatings[1];
      expect(firstRepoRating).toHaveTextContent(firstRepository.ratingAverage);
      expect(secondRepoRating).toHaveTextContent(secondRepository.ratingAverage);

      const repoReviews = getAllByTestId('reviewCount');
      const firstRepoReviews = repoReviews[0];
      const secondRepoReviews = repoReviews[1];
      expect(firstRepoReviews).toHaveTextContent(firstRepository.reviewCount);
      expect(secondRepoReviews).toHaveTextContent(secondRepository.reviewCount);
    });
  });
});