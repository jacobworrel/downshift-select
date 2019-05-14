import ControllerButton from './ControllerButon';
import Downshift from 'downshift'
import Menu from './Menu';
import Value from './Value';
import Placeholder from './Placeholder';
import React, { useState } from 'react'
import {
  itemToString,
} from './util';
import {
  getControllerWrapperStyle,
  getInputStyle,
} from './style';

const SingleSelect = ({
  defaultInputValue = '',
  itemList = [],
  isClearable = true,
  isSearchable = false,
  height = 40,
  placeholder = 'Select...',
}) => {
  const [ inputValue, setInputValue ] = useState(defaultInputValue);

  return (
    <Downshift
      onChange={selection => console.log(`You selected ${JSON.stringify(selection)}`)}
      onInputValueChange={inputValue => setInputValue(inputValue)}
      onSelect={() => setInputValue('')}
      inputValue={inputValue}
      itemToString={itemToString}
    >
      {({
        clearSelection,
        getInputProps,
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        inputValue,
        highlightedIndex,
        toggleMenu,
        selectedItem,
      }) => (
        <div style={{ width: '100%', height }}>
          <div
            onClick={toggleMenu}
            style={getControllerWrapperStyle({ height })}
          >
            <Placeholder
              selectedItem={selectedItem}
              inputValue={inputValue}
              placeholder={placeholder}
            />
            <Value
              selectedItem={selectedItem}
              inputValue={inputValue}
            />
            <input
              {...getInputProps({
                autoFocus: true,
                readOnly: !isSearchable,
              })}
              style={getInputStyle({ isSearchable })}
            />
            <ControllerButton
              clearSelection={clearSelection}
              getToggleButtonProps={getToggleButtonProps}
              isClearable={isClearable}
              isOpen={isOpen}
              selectedItem={selectedItem}
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Menu
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              inputValue={inputValue}
              isOpen={isOpen}
              isSearchable={isSearchable}
              itemList={itemList}
              selectedItem={selectedItem}
              height={height}
            />
          </div>
        </div>
      )}
    </Downshift>
  );
};

export default SingleSelect;