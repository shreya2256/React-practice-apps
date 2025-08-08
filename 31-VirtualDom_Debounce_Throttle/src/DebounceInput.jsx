// DebounceInput.jsx
import React, { useState, useEffect } from 'react';

function DebounceInput() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500); // 500ms debounce

    return () => clearTimeout(handler); // clear if user keeps typing
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      console.log('API Call with:', debouncedTerm);
      // Fetch or API call here
    }
  }, [debouncedTerm]);

  return (
    <input
      placeholder="Type to search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default DebounceInput;
