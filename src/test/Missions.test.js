import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import elementStore from '../redux/configureStore';
import Missions from '../pages/Missions';

const MissionsList = () => <>MissionsList</>;

test('should display the nav text Description', () => {
  render(<MissionsList />);
  screen.debug();
});

const missions = [
  {
    desc: 'The SpaceX Missions are good plan for system',
    key: 'cheers',
    id: 'csgo',
    type: 'hard',
    name: 'care',
    image: 'url',
    reservation: false,
  },
];

describe('Test renders the Missions component', () => {
  it('missions section renders a hardcoded object, passed as a prop', () => {
    const { container } = render(
      <Provider store={elementStore}>
        <Missions key={missions[0]} mission={missions[0]} />
      </Provider>,
    );
    expect(container).toMatchSnapshot();
  });
});
