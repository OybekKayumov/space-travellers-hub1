const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSIONS';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSIONS';
const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

// actions
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  payload: {
    id,
  },
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  payload: {
    id,
  },
});

export const getMission = (payload) => ({
  type: GET_MISSIONS,
  payload,
});

export const fetchMissionsFromApi = () => async (dispatch) => {
  const response = await fetch(baseURL);
  const missions = await response.json();

  const missionsToDispatch = missions.map((mission) => ({
    mission_id: mission.mission_id,
    mission_name: mission.mission_name,
    mission_description: mission.description,
  }));
  dispatch(getMission(missionsToDispatch));
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...newState];
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id !== action.payload.id) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [...newState];
    }
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
