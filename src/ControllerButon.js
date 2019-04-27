import React from 'react'
import {
  arrowButtonStyle,
  xButtonStyle,
} from './style';

const ControllerButton = ({
  clearSelection,
  getToggleButtonProps,
  isOpen,
  selectedItem
}) => (
  <React.Fragment>
    {selectedItem ? (
      <div>
        <button
          onClick={clearSelection}
          aria-label="clear selection"
          style={xButtonStyle}
        >
          <XIcon />
        </button>
        <button
          {...getToggleButtonProps()}
          style={arrowButtonStyle}
        >
          <ArrowIcon isOpen={isOpen}/>
        </button>
      </div>
    ) : (
      <button style={arrowButtonStyle}>
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

export default ControllerButton;