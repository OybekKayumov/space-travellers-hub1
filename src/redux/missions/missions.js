const JOIN_MISSION = 'space-travelers/missions/JOIN_MISSIONS';
const LEAVE_MISSION = 'space-travelers/missions/LEAVE_MISSIONS';
const GET_MISSIONS = 'space-travelers/missions/GET_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

// actions
export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
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
    case JOIN_MISSION:
      return [...state, action.payload];
    case LEAVE_MISSION:
      return state.filter((mission) => mission.id !== action.payload);
    case GET_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
