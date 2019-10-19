import { useCallback } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GetRepo } from './query.graphql';

export default function useStarTotal() {
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

  return {
    fetchRepo,
    total: (data && data.repository.stargazers.totalCount) || null,
    repo: (data && data.repository) || null,
    loading,
    error
  };
}
