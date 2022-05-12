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
    <tr>
      <th style={{ padding: '10px 10px', width: '100%', borderBottom: '1px solid #EEE' }}>{name}</th>
      <td style={{
        padding: '12px 10px', textAlign: 'center', backgroundColor: 'white', width: '200px', borderBottom: '1px solid #EEE',
      }}
      >
        <Button
          type="button"
          variant="danger"
          className="remove-reservation"
          onClick={handleLeaveMission}
          style={{ width: '100px' }}
        >
          Leave Mission
        </Button>
      </td>
    </tr>
  );
};

ProfileMissions.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProfileMissions;
