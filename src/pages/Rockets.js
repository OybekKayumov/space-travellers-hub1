import React from 'react';
import { useSelector } from 'react-redux';
import RocketItem from '../components/rockets/elementRockets';
import styles from '../components/rockets/Rockets.module.css';

const rocketList = useSelector((state) => state.rocketReducer);

function Rockets() {
  return (
    <ul className={styles.flex}>
      { rocketList.map((item) => (
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
  );
}

export default Rockets;
