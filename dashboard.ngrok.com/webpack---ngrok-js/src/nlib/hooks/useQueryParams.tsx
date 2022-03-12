import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type CommitOptions = {
  replace?: boolean;
};

// TODO(cody): replace with { useSearchParams } from 'react-router-dom'
// https://reactrouter.com/docs/en/v6/api#usesearchparams
export function useQueryParams() {
  const navigate = useNavigate();
  const location = useLocation();

  const query = React.useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );

  const updateQuery = React.useCallback(
    (key: string, value: string | undefined, options?: CommitOptions) => {
      if (value) {
        query.set(key, value);
      } else {
        query.delete(key);
      }
      const present = Boolean(value);
      navigate(present ? { search: query.toString() } : {}, {
        replace: Boolean(options?.replace),
      });
    },
    [navigate, query]
  );

  return [query, updateQuery] as const;
}
