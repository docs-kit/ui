# Theme Options

Both of the style overriding / extending strategies take the same object construct with the following options available:

| Property | Type              | Merged w/ Defaults | Description                                                                                    |
| -------- | ----------------- | ------------------ | ---------------------------------------------------------------------------------------------- |
| colors   | object            | Yes                | A set of colors overriding the defaults.                                                       |
| mq       | Facepaint[string] | No                 | A set of [Facepaint media queries](docs/emotion-facepaint.md) to be used by Doc UI components. |

## Using withStyles

```js
// A local OptionList.js file in your app

import { withStyles, facepaint, OptionList } from '@shockits/doc-ui';

const mq = facepaint([`@media(min-width: 768px)`, `@media(min-width: 1440px)`]);

const MyOptionList = withStyles({
  colors: { link: 'blue' },
  mq,
  type: {
    color: '#ff00cc',
  },
  description: {
    color: 'green',
    fontSize: ['0.5em', '1em', '1.5em'],
    margin: '1em',
  },
})(OptionList);

export default MyOptionList;
```

## Using localStyles

```js
import { facepaint, OptionList } from '@shockits/doc-ui';

const mq = facepaint([`@media(min-width: 768px)`, `@media(min-width: 1440px)`]);

<OptionList
  tableTitle="Arguments"
  localStyles={{
    colors: { link: 'blue' },
    mq,
    type: {
      color: '#ff00cc',
    },
    description: {
      color: 'green',
      fontSize: ['0.5em', '1em', '1.5em'],
      margin: '1em',
    },
  }}
  definitions={[
    {
      key: 'cancellation_reason',
      type: 'string',
    },
  ]}
/>;
```

## Default Options

You will find the default options for all Doc UI settings [here](https://github.com/shockits/doc-ui/blob/master/src/toolkit/theme.ts).