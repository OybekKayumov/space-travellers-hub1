import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { leaveMission } from '../../redux/missions/missions';

const ProfileMissions = (props) => {
  const dispatch = useDispatch();
  const { id, name } = props;

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <>
      <th>{name}</th>
      <td><Button type="button" variant="danger" className="remove-reservation" onClick={handleLeaveMission}>Leave Mission</Button></td>
    </>
  );
};

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProfileMissions;
