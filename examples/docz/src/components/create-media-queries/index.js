import { withStyles, facepaint, ColorBox } from '@doc-kits/react';

const mq = facepaint([`@media(min-width: 600px)`, `@media(min-width: 800px)`]);

export default withStyles({
  wrapper: mq({
    backgroundColor: ['black', 'red'],
  }),
})(ColorBox);
