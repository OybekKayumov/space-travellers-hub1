import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ProfileMissions from '../components/missions/ProfileMissions';
import ProfileRockets from '../components/rockets/ProfileRockets';
import style from './Profile.module.css';

export default function Profile() {
  const missionList = useSelector((state) => state.missions);
  const profileMission = missionList.filter((mission) => mission.reserved === true);

  const rocketList = useSelector((state) => state.rocketReducer);
  const profileRocket = rocketList.filter((rocket) => rocket.reservation === true);

  return (
    <div className={style.flex}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th colSpan={3}>My Rocket Reservations</th>
          </tr>
        </thead>
        <tbody>
          {profileRocket.length ? (
            profileRocket.map((item) => (
              <ProfileRockets
                key={item.id}
                id={item.id}
                name={item.name}
                wikipedia={item.wikipedia}
              />
            ))
          ) : (
            <tr className="empty"><td>No Rockets have been reserved</td></tr>
          )}
        </tbody>
      </Table>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>My Missions</th>
          </tr>
        </thead>
        <tbody>
          {profileMission.length ? (
            <tr>
              {profileMission.map((item) => (
                <ProfileMissions
                  key={item.mission_id}
                  id={item.mission_id}
                  name={item.mission_name}
                  description={item.mission_description}
                />
              ))}
            </tr>
          ) : (
            <tr className="empty"><td>You have not joined any missions</td></tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
