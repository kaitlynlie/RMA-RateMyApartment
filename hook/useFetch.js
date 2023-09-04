import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'POST',
    url: 'https://apartments-com.p.rapidapi.com/search',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '99d7c2a71emsh6a9112fb9a5acfcp196b99jsnc68d24f561ba',
      'X-RapidAPI-Host': 'apartments-com.p.rapidapi.com'
    },
    data: {
      page: 1,
      geog: {
        id: 27504,
        box: [
          -115.414628,
          36.129554,
          -115.062066,
          36.380491
        ],
        c: [
          -115.238347,
          36.2550225
        ],
        type: 3,
        radius: 0
      }
    }
  };

  const fetchData = async (searchTerm) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        options.url,
        null,
        {
          headers: options.headers,
          params: {
            search: searchTerm
          }
        }
      );
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error.response.data); // Log the error for debugging purposes
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch, fetchData };
};

export default useFetch;