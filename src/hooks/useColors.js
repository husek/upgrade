import { useQuery } from 'react-query';
import { apiClient } from '../services/apiClient';

const useColors = () => {
  const { isLoading, data, error } = useQuery('colors', async () => await apiClient('/colors').then(({ data }) => data));
  return {
    colors: data ?? [],
    isLoading,
    hasError: error
  }
}

export default useColors;
