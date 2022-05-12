import { render, screen } from '@testing-library/react';

const MissionsList = () => <>MissionsList</>;

test('should display the nav text Description', () => {
  render(<MissionsList />);
  screen.debug();
});
