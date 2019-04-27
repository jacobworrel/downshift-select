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
        <div style={{ width: 250, height: 40 }}>
          <SingleSelect
            itemList={itemList}
          />
        </div>
        {/*<hr />*/}
        {/*<div style={{ width: 500, height: 26 }}>*/}
          {/*<SingleSelect*/}
            {/*itemList={itemList}*/}
          {/*/>*/}
        {/*</div>*/}
      </div>
    );
  });
