import React, { useCallback } from 'react'
import {
  arrowButtonStyle,
  xButtonStyle,
} from './ControllerButton.style';

const ControllerButton = ({
  clearSelection,
  getToggleButtonProps,
  isClearable,
  isOpen,
  selectedItem
}) => (
  <React.Fragment>
    {selectedItem ? (
      <div>
        <ClearButton
          clearSelection={clearSelection}
          isClearable={isClearable}
        />
        <ToggleButton
          isOpen={isOpen}
          getToggleButtonProps={getToggleButtonProps}
        />
      </div>
    ) : (
      <ToggleButton
        isOpen={isOpen}
        getToggleButtonProps={getToggleButtonProps}
      />
    )}
  </React.Fragment>
);

function handleClose (e, clearSelection) {
  clearSelection();
  e.stopPropagation();
}

const ClearButton = ({ isClearable, clearSelection }) => (
  <React.Fragment>
    {
      isClearable && (
        <button
          onClick={useCallback(
            (e) => handleClose(e, clearSelection),
            [clearSelection]
          )}
          aria-label="clear selection"
          style={xButtonStyle}
        >
          <XIcon />
        </button>
      )
    }
  </React.Fragment>
);

const ToggleButton = ({ isOpen, getToggleButtonProps }) => (
  <button
    {...getToggleButtonProps({
      onClick (e) {
        // prevents parent div from calling toggleMenu again onClick
        e.stopPropagation();
      }
    })}
    style={arrowButtonStyle}
  >
    <ArrowIcon isOpen={isOpen}/>
  </button>
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
};

export default ControllerButton;