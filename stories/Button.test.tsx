import React from 'react';
import {composeStories} from '@storybook/testing-react';
import {render, screen} from '@testing-library/react';
import * as Stories from './Button.stories';

const {Primary} = composeStories(Stories);

describe('Button', () => {
  it('can get clicked', () => {
    render(<Primary />)
    screen.getByRole('button');
  });
});
