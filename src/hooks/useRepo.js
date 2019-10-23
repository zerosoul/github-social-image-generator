import { useCallback, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GetRepo } from './query.graphql';

export default function useRepo() {
  const [getRepo, { data, loading, error }] = useLazyQuery(GetRepo);

  const fetchRepo = useCallback(
    ({ owner, name }) => {
      getRepo({
        variables: {
          owner,
          name
        }
      });
    },
    [getRepo]
  );
  // 有变化，就存localStorage
  useEffect(() => {
    if (data) {
      const { url } = data.repository;
      localStorage.setItem('LOCAL_REPO_URL', url);
    }
  }, [data]);
  return {
    fetchRepo,
    total: (data && data.repository.stargazers.totalCount) || null,
    repo: (data && data.repository) || null,
    loading,
    error
  };
}
