import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    // [WILL BE USED WITH ASYNC LOGIC]
    // case types.LOAD_COURSES_SUCCESS:
    //   return action.courses;
    case types.CREATE_COURSE:
      return [...state, action.course];
    case types.DELETE_COURSE:
      let courseList = state.filter((course) => {
        return course.id !== action.id;
      });
      return courseList;
    default:
      return state;
  }
}
