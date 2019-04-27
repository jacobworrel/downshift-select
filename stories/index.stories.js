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
      <div>
        <div style={{ width: 250 }}>
          <SingleSelect
            itemList={itemList}
            height={40}
          />
        </div>
        {/*<hr />*/}
        {/*<div style={{ width: 500 }}>*/}
          {/*<SingleSelect*/}
            {/*itemList={itemList}*/}
            {/*height={26}*/}
          {/*/>*/}
        {/*</div>*/}
      </div>
    );
  });
