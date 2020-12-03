import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
/*   const [repositories, setRepositories] = useState(); */
  const repositoryResult = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });
  const { loading, data, fetchMore, ...result } = repositoryResult;

  const handleFetchMore = () => {
    const canFetchMore = 
      !loading && data && data.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: GET_REPOSITORIES,
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const nextResult = {
          repositories: {
            ...fetchMoreResult.repositories,
            edges: [
              ...previousResult.repositories.edges,
              ...fetchMoreResult.repositories.edges,
            ],
          },
        };

        return nextResult;
      },
    });
  };

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  }

/*   useEffect(() => {
    if (called & networkStatus > 6) {
      const fetchedRepositories = data ? data.repositories : [];
      setRepositories(fetchedRepositories);
    }

  }, [repositoryResult]);

  return { repositories, loading, refetch }; */
};

export default useRepositories;