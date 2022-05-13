import React from 'react';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import ProfileRockets from '../components/rockets/ProfileRockets';
import ProfileMissions from '../components/missions/ProfileMissions';
import style from './Profile.module.css';

export default function Profile() {
  const missionList = useSelector((state) => state.missions);
  const profileMission = missionList.filter((mission) => mission.reserved === true);

  const rocketList = useSelector((state) => state.rockets);
  const profileRocket = rocketList.filter((rocket) => rocket.reservation === true);

  return (
    <div className={style.flex}>
      <Table bordered hover>
        <thead>
          <tr>
            <th
              style={{
                padding: '5px 10px', backgroundColor: 'white',
              }}
              colSpan={3}
            >
              My Rocket Reservations
            </th>
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
      <Table bordered hover>
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
            <tr className="empty"><td>You have not joined any missions at the moment</td></tr>
          )}
        </tbody>
      </Table>
    </div>
  );
}
