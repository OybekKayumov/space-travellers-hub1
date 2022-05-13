import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import Rockets from '../pages/Rockets';

// arrangement
const rockets = [
  {
    desc: 'The SpaceX Rockets are good module for render',
    key: 'frame',
    id: 'rocky',
    type: 'module',
    name: 'rocky',
    image: 'url',
    reservation: false,
  },
];

describe('Test render the Rockets Component', () => {
  it('rockets section renders a hardcoded obj, passed as a prop', () => {
    // act
    const { container } = render(
      <Provider store={elementStore}>
        <Rockets key={rockets[0].id} rocket={rockets[0]} />
      </Provider>,
    );

    // assert
    expect(container).toMatchSnapshot();
  });
});
