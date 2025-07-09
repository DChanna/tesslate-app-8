import React from 'react';

interface ItemListProps {
  items: number[];
}

function ItemList({ items }: ItemListProps) {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
export default ItemList;