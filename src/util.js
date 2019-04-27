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
