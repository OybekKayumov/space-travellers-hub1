import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import ProfileRocket from '../components/Rockets/ProfileRockets';
import ProfileMissions from '../components/missions/ProfileMissions';
import Profile from '../pages/Profile';

const rocket = [
  {
    key: 'rocket',
    id: 'rocket',
    name: 'rocket 1',
    wikipedia: 'http://en.wikipedia.org/',
  },
];

const mission = [
  {
    key: 'mission',
    id: 'mission',
    name: 'mission 1',
    description: 'mission alpha',
  },
];

describe('test render the profile component', () => {
  it('profile section renders a hardcoded obj, passed as a prop', () => {
    // act
    const { container } = render(
      <Provider store={elementStore}>
        <Profile>
          <ProfileRocket key={rocket[0].id} rocket={rocket[0]} />
          <ProfileMissions key={mission[0].id} mission={mission[0]} />
        </Profile>
      </Provider>,
    );

    // assert
    expect(container).toMatchSnapshot();
  });
});
