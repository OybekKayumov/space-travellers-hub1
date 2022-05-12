import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import RocketItem from '../components/rockets/elementRockets';
import styles from '../components/rockets/Rockets.module.css';

function Rockets() {
  // const rocketList = useSelector((state) => state.rocketReducer);
  const rocketList = useSelector((state) => state.rockets);
  return (
    <Container>
      <ul className={styles.flex1}>
        {rocketList.map((item) => (
          <RocketItem
            desc={item.desc}
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.flickr_images}
            reserved={item.reservation}
          />
        ))}
      </ul>
    </Container>
  );
}

export default Rockets;
