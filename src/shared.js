import matchSorter from 'match-sorter';

export function itemToString (item) {
  return (item ? item.name : '');
}

export function filterItemList(itemList, filter) {
  return filter
    ? matchSorter(itemList, filter, {
      keys: ['name'],
    })
    : itemList;
}

export const inputStyle = {
  width: '100%',
  fontSize: 14,
  wordWrap: 'break-word',
  lineHeight: '1em',
  outline: 0,
  whiteSpace: 'normal',
  height: '100%',
  background: '#fff',
  display: 'inline-block',
  padding: '0 1em',
  boxSizing: 'border-box',
  color: 'rgba(0,0,0,.87)',
  boxShadow: 'none',
  border: '1px solid rgba(34,36,38,.15)',
  // transition: 'box-shadow .1s ease,width .1s ease',
};

export const wrapperStyle = {
  width: '100%',
  height: '100%',
};

export const controllerButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  position: 'absolute',
  right: 0,
  top: 0,
  cursor: 'pointer',
  width: 47,
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  outline: 0,
};
