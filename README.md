To reproduce https://github.com/storybookjs/storybook/issues/16677,

run `yarn install`

then `yarn test`

You should see a console warning.

If you comment out `import { userEvent } from '@storybook/testing-library';`
in `Button.stories.js`, the console warning will not appear.
