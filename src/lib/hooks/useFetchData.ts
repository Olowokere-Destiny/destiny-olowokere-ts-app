import { useEffect, useState } from "react";

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(0);

  const handleReload = () => {
    // trigger products reload
    setReload((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setIsError(false);

      try {
        const url = import.meta.env.VITE_PRODUCTS_URL; // stored in .env for security. Check README for url.
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reload]);

  return { loading, isError, data, handleReload };
};

export default useFetchData;
