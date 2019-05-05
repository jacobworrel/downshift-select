import React from 'react';
import { filterItemList } from './util';
import {
  getListItemStyle,
  getMenuStyle,
} from './style';

const Menu = ({
  getMenuProps,
  getItemProps,
  height,
  highlightedIndex,
  isOpen,
  inputValue,
  isSearchable,
  itemList,
  selectedItem,
}) => {
  itemList = isSearchable ? filterItemList(itemList, inputValue) : itemList;
  return (
    <ul {...getMenuProps()} style={getMenuStyle({ isOpen })}>
      {isOpen
        ? itemList.map((item, index) => (
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
  );
};

export default Menu;