import {
  useState,
  useEffect,
} from "react";

import {
  getAllScripts,
} from "../services/scriptService";

const useScripts = () => {
  const [scripts, setScripts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(null);

  useEffect(() => {
    fetchScripts();
  }, []);

  const fetchScripts =
    async () => {
      try {
        setLoading(true);

        const data =
          await getAllScripts();

        setScripts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

  return {
    scripts,
    loading,
    error,
    refetch: fetchScripts,
  };
};

export default useScripts;             