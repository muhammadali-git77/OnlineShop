import React, { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      const req = await fetch(url);
      const _data = await req.json();
      setIsPending(false);

      setData(_data);
    };

    getData();
  }, [url]);

  return { data, isPending };
}
