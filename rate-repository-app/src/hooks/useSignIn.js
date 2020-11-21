import { useMutation } from '@apollo/react-hooks';
import { SIGN_IN } from '../graphql/mutations';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const result = await mutate({
      variables: { username, password }
    });
    return result;
  };

  return [signIn, result];
};

export default useSignIn;