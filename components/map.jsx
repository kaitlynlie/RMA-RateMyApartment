import React from 'react';
import { Text, View, Button } from 'react-native';
import useFetch from '../hook/useFetch';

const ApartmentList = () => {
  const { data, isLoading, error, refetch } = useFetch();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data || data.length === 0) {
    console.log('No data available:', data);
    return <Text>No data available</Text>;
  }

  return (
    <View>
      <Button title="Refetch Data" onPress={refetch} />
      {data.results.map((apartment) => (
        <Text key={apartment.id}>{apartment.text}</Text>
      ))}
    </View>
  );
};

export default ApartmentList;
