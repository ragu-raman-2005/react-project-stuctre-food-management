
import { useState, useEffect } from "react";

function useFetch(fetchFunction) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiStatus, setApiStatus] = useState(null);

  const fetchData = async () => {

    try {

      setLoading(true);
      setError(null);
      setApiStatus(null);

      const result = await fetchFunction();

      setData(result.products);

      setApiStatus({
        success: true,
        status: result.status,
        statusText: result.statusText,
        apiUrl: result.apiUrl
      });

    } catch (err) {

      console.error("API ERROR:", err);

      setError(err);

      setApiStatus({
        success: false,
        type: err.type,
        status: err.status,
        statusText: err.statusText,
        message: err.message,
        apiUrl: err.apiUrl
      });

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {
    fetchData();
  }, [fetchFunction]);

  return {
    data,
    loading,
    error,
    apiStatus,
    refetch: fetchData
  };

}

export default useFetch;
