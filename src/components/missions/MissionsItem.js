import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionsItem = ({
  id, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <th>{name}</th>
      <td>{description}</td>
      <td>{reserved ? (<Badge bg="info">Active Member</Badge>) : (<Badge bg="secondary">Not A Member</Badge>)}</td>
      <td colSpan={2}>{reserved ? (<Button onClick={handleLeaveMission} variant="outline-danger">Leave Mission</Button>) : (<Button onClick={handleJoinMission} variant="outline-secondary">Join Mission</Button>)}</td>
    </tr>
  );
};

export default MissionsItem;

MissionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
