import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setData(data))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, loading };
}
