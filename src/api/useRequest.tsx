import { useEffect, useState } from 'react';

// Define the return type of the hook to include 'loading'
interface RequestState<T> {
  data: T | null;
  error: boolean;
  loading: boolean;
}

function useRequest<T>(url: string): RequestState<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);  // Initialize loading state as true

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);  // Set loading to false upon successful data fetch
      })
      .catch(() => {
        setError(true);
        setLoading(false);  // Set loading to false also when an error occurs
      });
  }, [url]);

  return { data, error, loading };
}

export default useRequest;
