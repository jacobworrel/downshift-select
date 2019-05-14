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