import ControllerButton from './ControllerButon';
import Downshift from 'downshift'
import React from 'react'

import {
  filterItemList,
  itemToString,
} from './util';

import {
  inputStyle,
  getMenuStyle,
  getListItemStyle,
} from './style';

const SingleSelect = ({ itemList, height }) => (
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
      selectedItem,
    }) => (
      <div style={{ width: '100%', height }}>
        <div style={{ position: 'relative', height }}>
          <input {...getInputProps({ isOpen, placeHolder: 'Select...' })} style={inputStyle} />
          <ControllerButton
            clearSelection={clearSelection}
            getToggleButtonProps={getToggleButtonProps}
            isOpen={isOpen}
            selectedItem={selectedItem}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <ul {...getMenuProps()} style={getMenuStyle({ isOpen })}>
            {isOpen
              ? filterItemList(itemList, inputValue).map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.name,
                    index,
                    item,
                  })}
                  style={getListItemStyle({
                    isActive: highlightedIndex === index,
                    isSelected: selectedItem === item,
                    height,
                  })}
                >
                  {item.name}
                </li>
              ))
              : null}
          </ul>
        </div>
      </div>
    )}
  </Downshift>
);

export default SingleSelect;