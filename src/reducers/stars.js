import { handleActions } from 'redux-actions';

const initialState = {
  data: [],
  loading: false,
  syncAllFinished: false,
};

export default handleActions({

  'sync stars start' (state, action) {
    return {...state, loading: true, status: 'sync page 1', data: [], syncAllFinished: false};
  },

  'sync stars end' (state, action) {
    return {...state, data: action.payload, loading: false, status: '', syncAllFinished: true};
  },

  'sync stars firstpage' (state, action) {
    return {...state, data: action.payload};
  },

  'sync stars status' (state, action) {
    const { next, last } = action.payload;
    return {...state, status: `sync page ${next} of ${last}`};
  },

  'select star' (state, action) {
    return {...state, selectedStar: action.payload};
  },

  'unstar end' (state, action) {
    const data = state.data.filter(item => item.id !== state.selectedStar);
    return {...state, data, selectedStar: null};
  },

}, initialState);