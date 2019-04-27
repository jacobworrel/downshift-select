import React from 'react'
import Downshift from 'downshift'

import {
  filterItemList,
  itemToString,
  controllerButtonStyle,
  inputStyle,
  wrapperStyle,
} from './shared';

const SingleSelect = ({ itemList }) => (
  <Downshift
    onChange={selection => alert(`You selected ${JSON.stringify(selection)}`)}
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
      <div style={wrapperStyle}>
        <div style={{ position: 'relative', height: '100%' }}>
          <input {...getInputProps({ isOpen, placeHolder: 'Select...', style: inputStyle })} />
          <ControllerButton
            clearSelection={clearSelection}
            getToggleButtonProps={getToggleButtonProps}
            isOpen={isOpen}
            selectedItem={selectedItem}
          />
        </div>
        <ul {...getMenuProps()}>
          {isOpen
            ? filterItemList(itemList, inputValue).map((item, index) => (
              <li
                {...getItemProps({
                  key: item.name,
                  index,
                  item,
                  style: {
                    backgroundColor: highlightedIndex === index ? 'lightgray' : null,
                    fontWeight: selectedItem === item ? 'bold' : 'normal',
                  },
                })}
              >
                {item.name}
              </li>
            ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);

const ControllerButton = ({
  clearSelection,
  getToggleButtonProps,
  isOpen,
  selectedItem
}) => (
  <React.Fragment>
    {selectedItem ? (
        <button
          onClick={clearSelection}
          aria-label="clear selection"
          style={controllerButtonStyle}
        >
          <XIcon />
        </button>
      ) : (
        <button {...getToggleButtonProps()} style={controllerButtonStyle}>
          <ArrowIcon isOpen={isOpen}/>
        </button>
      )}
  </React.Fragment>
);

const XIcon = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={12}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
    >
      <path d="M1,1 L19,19" />
      <path d="M19,1 L1,19" />
    </svg>
  )
};

const ArrowIcon = ({ isOpen }) => {
  return (
    <svg
      viewBox="0 0 20 20"
      preserveAspectRatio="none"
      width={16}
      fill="transparent"
      stroke="#979797"
      strokeWidth="1.1px"
      transform={isOpen ? 'rotate(180)' : undefined}
    >
      <path d="M1,6 L10,15 L19,6" />
    </svg>
  )
}

export default SingleSelect;