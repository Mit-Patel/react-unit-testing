import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';

import { cleanup, render } from '@testing-library/react';
import renderer from 'react-test-renderer';

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
});

it('renders button correctly', () => {
    const {getByTestId} = render(<Button label="Click Me" />);

    expect(getByTestId('button')).toHaveTextContent("Click Me");
});

it('renders button correctly 2', () => {
    const {getByTestId} = render(<Button label="save" />);

    expect(getByTestId('button')).toHaveTextContent("save");
});

it('matches snapshot', () => {
    const tree = renderer.create(<Button label="save" />).toJSON();

    expect(tree).toMatchSnapshot();
});
