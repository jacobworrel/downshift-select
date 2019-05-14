import React from 'react';
import { getValueStyle } from './style';

const Value = ({ selectedItem, inputValue }) => {
  if (selectedItem === null || inputValue !== '') {
    return null;
  }

  return (
    <div style={getValueStyle()}>{selectedItem.name}</div>
  );
};

export default Value;