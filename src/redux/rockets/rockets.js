const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const addRocketReservation = (id) => ({
  type: ADD_RESERVATION,
  payload: {
    id,
  },
});

export const removeRocketReservation = (id) => ({
  type: REMOVE_RESERVATION,
  payload: {
    id,
  },
});

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const fetchRocketsAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((rocketList) => {
      const arrangedList = rocketList.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        desc: rocket.description,
        type: rocket.rocket_type,
        flickr_images: rocket.flickr_images,
        wikipedia: rocket.wikipedia,
        reservation: false,
      }));
      if (arrangedList) {
        dispatch(getRockets(arrangedList));
      }
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;

        return { ...rocket, reservation: true };
      });
      return [...newState];
    }
    case REMOVE_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.payload.id) return rocket;

        return { ...rocket, reservation: false };
      });

      return [...newState];
    }
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
