const borderColor = 'rgba(34,36,38,.15)';

export const inputStyle = {
  width: '100%',
  wordWrap: 'break-word',
  lineHeight: '1em',
  outline: 0,
  whiteSpace: 'normal',
  height: '100%',
  // background: '#fff',
  display: 'inline-block',
  padding: '0 1em',
  boxSizing: 'border-box',
  border: 'none',
  // color: 'rgba(0,0,0,.87)',
  // boxShadow: 'none',
  // transition: 'box-shadow .1s ease,width .1s ease',
};

const truncateStyle = {
  wordWrap: 'break-word',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

export const selectionStyle = {
  width: '75%',
  fontSize: 16,
  ...truncateStyle,
};

export function getControllerWrapperStyle ({ height }) {
  return {
    height,
    cursor: 'pointer',
    position: 'relative',
    border: `1px solid ${borderColor}`,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '1em',
  };
}

const sharedButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  top: 0,
  cursor: 'pointer',
  width: 30,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 0,
  padding: 0,
};

export const arrowButtonStyle = {
  ...sharedButtonStyle,
  right: 10,
};

export const xButtonStyle = {
  ...sharedButtonStyle,
  right: 30,
};

export function getMenuStyle ({ isOpen }) {
  return {
    backgroundColor: 'white',
    borderColor,
    borderStyle: 'solid',
    borderWidth: isOpen ? '0 1px 1px 1px' : '0 0 0 0',
    boxShadow: '0 2px 3px 0 rgba(34,36,38,.15)',
    boxSizing: 'border-box',
    marginTop: 0,
    maxHeight: '20rem',
    outline: '0',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: 0,
    position: 'absolute',
    transition: 'opacity .1s ease',
    width: '100%',
  }
}

export function getListItemStyle ({ isActive, isSelected, height }) {
  return {
    background: isActive || isSelected ? 'rgba(0,0,0,.03)' : 'inherit',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    height,
    padding: '0 1em',
    position: 'relative',
    ...truncateStyle,
  }
}