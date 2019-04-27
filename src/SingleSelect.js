import ControllerButton from './ControllerButon';
import Downshift from 'downshift'
import React from 'react'

import {
  itemToString,
} from './util';

import {
  selectionStyle,
  truncateStyle,
  getControllerWrapperStyle,
  getMenuStyle,
  getListItemStyle,
} from './style';

const SingleSelect = ({
  itemList,
  height = 40,
  placeholder = 'Select...'
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
      selectedItem,
    }) => (
      <div style={{ width: '100%', height }}>
        <div {...getToggleButtonProps()} style={getControllerWrapperStyle({ height })}>
          <div style={selectionStyle}>{selectedItem ? selectedItem.name : placeholder }</div>
          {/*<input {...getInputProps({ isOpen, placeHolder: 'Select...' })} style={inputStyle} />*/}
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
              ? /*filterItemList(itemList, inputValue)*/itemList.map((item, index) => (
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