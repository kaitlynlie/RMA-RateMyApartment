import { useState, useEffect } from 'react';
import axios from 'axios';
// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: 'POST',
    url: 'https://apartments-com.p.rapidapi.com/typeahead',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '99d7c2a71emsh6a9112fb9a5acfcp196b99jsnc68d24f561ba',
      'X-RapidAPI-Host': 'apartments-com.p.rapidapi.com',
    },
    data: { search: 'las' },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
    const response = await fetch('99d7c2a71emsh6a9112fb9a5acfcp196b99jsnc68d24f561ba');
    if (!response.ok) {
        throw new Error('Error occurred during API request');
      }
      const responseData = await response.json();
      setData(responseData);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;