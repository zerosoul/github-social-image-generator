import { useCallback, useEffect } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const GET_REPO = gql`
  query GetRepo($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      descriptionHTML
      shortDescriptionHTML
      createdAt
      description
      viewerHasStarred
      url
      usesCustomOpenGraphImage
      forkCount
      homepageUrl
      nameWithOwner
      diskUsage
      owner {
        avatarUrl
      }
      watchers {
        totalCount
      }
      primaryLanguage {
        name
        color
        id
      }
      stargazers {
        totalCount
      }
    }
  }
`;
export default function useRepo() {
  const [getRepo, { data, loading, error }] = useLazyQuery(GET_REPO);

  const fetchRepo = useCallback(
    ({ owner, name }) => {
      getRepo({
        variables: {
          owner,
          name,
        },
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
    error,
  };
}
