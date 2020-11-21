import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const [repositories, setRepositories] = useState();

  // Replace the IP address part with your own IP address!
  const repositoryResult = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });
  const { called, loading, networkStatus, data, refetch } = repositoryResult;
  console.log(data);

  useEffect(() => {
    if (called & networkStatus > 6) {
      const fetchedRepositories = data ? data.repositories : [];
      setRepositories(fetchedRepositories);
    }

  }, [repositoryResult]);

  return { repositories, loading, refetch };
};

export default useRepositories;