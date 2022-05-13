import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import { addRocketReservation, removeRocketReservation } from '../../redux/rockets/rockets';
import styles from './Rockets.module.css';

const ElementRockets = (props) => {
  const dispatch = useDispatch();

  const {
    id, name, image, desc, reserved,
  } = props;

  const handleReserveClick = () => {
    dispatch(addRocketReservation(id));
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <li className={styles.rocketContainer} id={id}>
      <img style={{ width: '350px' }} src={image} alt="rocket" />
      <div className={styles.rocketDescription}>
        <h2>{name}</h2>
        <p>
          { reserved && <span>Reserved</span>}
          { `${desc}` }
        </p>
        { reserved ? (
          <Button type="button" className={styles.removeReservation} onClick={handleRemoveReserveClick}>
            Cancel Reservation
          </Button>
        ) : (
          <Button type="button" variant="danger" className={styles.addReservation} onClick={handleReserveClick}>
            Reserve Rocket
          </Button>
        )}
      </div>
    </li>
  );
};

ElementRockets.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default ElementRockets;
