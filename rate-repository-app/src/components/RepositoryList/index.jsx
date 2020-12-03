import React, { useState, useEffect } from 'react';
import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const [sort, setSort] = useState();
  const [variables, setVariables] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const { repositories, fetchMore } = useRepositories({
    first: 8,
    ...variables,
  });
  const [debouncedSearchQuery] = useDebounce(searchQuery, 300);
  console.log("SORT IS", sort, "VARIABLES IS", variables)

  const onChangeSearch = query => setSearchQuery(query);

  const onPress = (variables, sortType) => {
    setVariables(variables);
    setSort(sortType);
    setSearchQuery('');
  }

  const onEndReach = () => {
    fetchMore();
    console.log("The end of the list has been reached");
  }

  useEffect(() => {
    console.log("SEARCH QUERY", searchQuery, "DEBOUNCED SQ", debouncedSearchQuery)
    setVariables({ ...variables, searchKeyword: debouncedSearchQuery });
  }, [debouncedSearchQuery])

  return <RepositoryListContainer 
    repositories={repositories}
    sort={sort}
    variables={variables}
    searchQuery={searchQuery}
    onChangeSearch={onChangeSearch}
    onPress={onPress}
    onEndReach={onEndReach} />
};

export default RepositoryList;