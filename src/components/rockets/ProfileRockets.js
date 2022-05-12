import React from 'react';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { removeRocketReservation } from '../../redux/rockets/rockets';
import './Rockets.module.css';

function ProfileRockets(props) {
  const dispatch = useDispatch();
  const { id, name, wikipedia } = props;

  const handleCancelReservation = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <tr>
      <th
        style={{
          padding: '12px 10px', backgroundColor: 'white',
        }}
      >
        {name}
      </th>
      <td
        style={{
          padding: '12px 10px', backgroundColor: 'white',
        }}
      >
        <a href={wikipedia}>
          Read more
        </a>
      </td>
      <td
        style={{
          padding: '12px 10px', textAlign: 'center', backgroundColor: 'white',
        }}
      >
        <Button
          type="button"
          variant="danger"
          className="remove-reservation"
          onClick={handleCancelReservation}
          style={{ width: '110px' }}
        >
          Cancel Reservation
        </Button>
      </td>
    </tr>
  );
}

ProfileRockets.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,

};

export default ProfileRockets;
