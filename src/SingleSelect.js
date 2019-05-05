import ControllerButton from './ControllerButon';
import Downshift from 'downshift'
import Menu from './Menu';
import React from 'react'
import {
  itemToString,
} from './util';
import {
  getControllerWrapperStyle,
  inputStyle,
  selectionStyle,
} from './style';

const SingleSelect = ({
  itemList = [],
  isClearable = true,
  isSearchable = false,
  height = 40,
  placeholder = 'Select...',
}) => (
  <Downshift
    onChange={selection => console.log(`You selected ${JSON.stringify(selection)}`)}
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
          {
            isSearchable ? (
              <input
                {...getInputProps({ isOpen, placeHolder: 'Select...' })}
                autoFocus
                style={inputStyle}
              />
            ) : (
              <div style={selectionStyle}>{selectedItem ? selectedItem.name : placeholder }</div>
            )
          }
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

export default SingleSelect;