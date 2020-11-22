import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';

const useGetUser = () => {
  const [authorizedUser, setAuthorizedUser] = useState();
  const userResult = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  const { called, networkStatus, loading, data, refetch } = userResult;

  useEffect(() => {
    if (called & networkStatus > 6) {
      const result = data ? data.authorizedUser : null;
      setAuthorizedUser(result);
    }
  }, [userResult]);

  return { authorizedUser, loading, refetch };
};

export default useGetUser;