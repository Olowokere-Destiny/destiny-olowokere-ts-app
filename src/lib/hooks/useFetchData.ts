import { useEffect, useState } from "react";

const useFetchData = () => {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setIsError(false);

      try {
        const res = await fetch("https://fakestoreapi.com/products");
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
  }, []);

  return { loading, isError, data };
};

export default useFetchData;