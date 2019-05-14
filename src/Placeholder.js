import React from 'react';
import { getPlaceholderStyle } from './style';

const Placeholder = ({
  inputValue,
  placeholder,
  selectedItem,
}) => {
  if (selectedItem !== null || inputValue !== '') {
    return null;
  }

  return (
    <div style={getPlaceholderStyle()}>
      {placeholder}
    </div>
  );
};

export default Placeholder;