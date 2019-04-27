import React from 'react';
import { storiesOf } from '@storybook/react';
import SingleSelect from '../src/SingleSelect'

const itemList = [];

for (let i = 0; i < 100; i += 1) {
  itemList.push({
    name: `Item ${i}`,
    id: i
  });
}

storiesOf('SingleSelect', module)
  .add('Default', () => {
    return (
      <div style={{ width: 250 }}>
        <SingleSelect
          itemList={itemList}
        />
      </div>
    )
  })
  .add('Size Variants', () => {
    return (
      <div style={{ width: 250 }}>
        <SingleSelect
          itemList={itemList}
          height={26}
        />
      </div>
    )
  })
  .add('Truncated Text', () => {
    const itemList = [];


    for (let i = 0; i < 100; i += 1) {
      itemList.push({
        name: `Item ${i} dkfjkdjfkdjfkdjkfjdkfjkdjfkdjfkjdkfjkdjkfjdkfj`,
        id: i
      });
    }

    return (
      <div style={{ width: 250 }}>
        Ellipsis not working list items.
        <SingleSelect
          itemList={itemList}
          placeholder="Placeholder dkfjdkjfkdjfkjdkfjkdjfkdjfkjdkfjkdjfkjdkfjkdjfkjkdjfkjdkfj"
        />
      </div>
    )
  });
