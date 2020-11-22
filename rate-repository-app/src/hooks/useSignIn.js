import { useApolloClient, useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';
import { useContext } from 'react';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const result = await mutate({
      variables: { credentials: { username, password } }
    });
    await authStorage.setAccessToken(result.data.authorize.accessToken);
    apolloClient.resetStore();
    return result;
  };

  return [signIn, result];
};

export default useSignIn;