import React, { useState } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const [sort, setSort] = useState();
  const [variables, setVariables] = useState();
  const { repositories } = useRepositories({...variables});
  console.log("SORT IS", sort, "VARIABLES IS", variables)

  const onPress = (variables, sortType) => {
    setVariables(variables);
    setSort(sortType)
  }

  return <RepositoryListContainer 
    repositories={repositories}
    sort={sort}
    variables={variables}
    onPress={onPress} />
};

export default RepositoryList;