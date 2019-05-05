import React from 'react';
import { getListItemStyle, getMenuStyle } from './style';

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
}) => (
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
);

export default Menu;