import { getTheoryById } from '../../API/api';

const SET_THEORY = 'SET_THEORY';
const SET_PAGE = 'SET_PAGE';
const SET_ACCEPT_PAGE = 'SET_ACCEPT_PAGE';

const initialState = {
  theory: null,
  page: 0,
  count: null,
  type: null,
  acceptPages: [],
  rejectPages: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THEORY:
      return {
        ...state,
        count: payload.count,
        type: payload.type,
        theory: payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SET_ACCEPT_PAGE:
      console.log('idd:' + payload);
      if (state.acceptPages.includes(payload)) {
        return state;
      }
      return {
        ...state,
        acceptPages: [...state.acceptPages, payload],
      };
    default:
      return state;
  }
};

export const setTheory = (theory) => {
  return { type: SET_THEORY, payload: theory };
};
export const setPage = (id) => {
  return { type: SET_PAGE, payload: id };
};
export const setAcceptPage = (id) => {
  return { type: SET_ACCEPT_PAGE, payload: id };
};

export const getTheory = (id) => {
  return async (dispatch) => {
    let result = await getTheoryById(id);
    dispatch(setTheory(result));
    if (result.type === 0) {
      dispatch(setAcceptPage(id - 1));
    }
  };
};

export default reducer;
