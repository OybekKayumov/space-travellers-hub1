import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import ProfileMissions from '../components/missions/ProfileMissions';
import style from './Profile.module.css';

export default function Profile() {
  const missionList = useSelector((state) => state.missions);
  const profileMission = missionList.filter((mission) => mission.reserved === true);
  return (
    <div className={style.flex}>
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
