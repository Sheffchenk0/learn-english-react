import { getTheoryById } from '../../API/api';

const SET_THEORY = 'SET_THEORY';
const SET_PAGE = 'SET_PAGE';
const SET_FINISH_PAGE = 'SET_FINISH_PAGE';
const SET_ANSWERS = 'SET_ANSWERS';

const initialState = {
  theory: {},
  page: 0,
  count: null,
  type: null,
  pagesFinish: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_THEORY:
      return {
        ...state,
        count: payload.theory.count,
        type: payload.type,
        theory: { ...state.theory, [payload.id]: { ...payload.theory, answers: {} } },
      };
    case SET_PAGE:
      return {
        ...state,
        page: payload,
      };
    case SET_FINISH_PAGE:
      if (state.pagesFinish[payload.id]) {
        return state;
      }
      return {
        ...state,
        pagesFinish: { ...state.pagesFinish, [payload.id]: { ...payload } },
      };
    case SET_ANSWERS:
      return {
        ...state,
        theory: {
          ...state.theory,
          [payload.page]: { ...state.theory[payload.page], answers: [...payload.answers] },
        },
      };
    default:
      return state;
  }
};

export const setTheory = (id, theory) => {
  return { type: SET_THEORY, payload: { id, theory } };
};
export const setPage = (id) => {
  return { type: SET_PAGE, payload: id };
};
export const setFinishPage = (id, isRight) => {
  return { type: SET_FINISH_PAGE, payload: { id, isRight } };
};
export const setAnswers = (page, answers) => {
  return { type: SET_ANSWERS, payload: { page, answers } };
};

export const checkAnswers = (page, answers) => {
  return (dispatch) => {
    let result = answers.map((el) => el.isRight);
    if (result.includes(false)) {
      dispatch(setFinishPage(page, false));
    } else if (result.length) {
      dispatch(setFinishPage(page, true));
    }
    dispatch(setAnswers(page, answers));
  };
};

export const getTheory = (page) => {
  return (dispatch) => {
    getTheoryById(page).then((result) => {
      dispatch(setTheory(page - 1, result));
      if (result.type === 0) {
        dispatch(setFinishPage(page - 1, true));
      }
    });
  };
};

export default reducer;
