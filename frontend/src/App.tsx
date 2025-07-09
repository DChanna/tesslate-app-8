import React from 'react';
import { useGetEndpoint1 } from './api';
import ItemList from './components/ItemList';
import CreateItemForm from './components/CreateItemForm';

function App() {
  const { data, error, isLoading } = useGetEndpoint1();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <h1>Item List</h1>
      <ItemList items={data?.field2} />
      <CreateItemForm />
    </div>
  );
}
export default App;