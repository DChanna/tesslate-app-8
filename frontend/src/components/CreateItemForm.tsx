import React, { useState } from 'react';
import { RequestSchema } from '../api';

function CreateItemForm() {
  const [formData, setFormData] = useState<RequestSchema>({ field1: '' });
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    // Call API to create item
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Field 1:
        <input
          type="text"
          value={formData.field1}
          onChange={(event) => setFormData({ field1: event.target.value })}
        />
      </label>
      <button type="submit">Create Item</button>
    </form>
  );
}
export default CreateItemForm;