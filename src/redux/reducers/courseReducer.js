import * as types from "../actions/actionTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.LOAD_COURSES_SUCCESS:
      return action.courses;
    case types.CREATE_COURSE:
      return [...state, action.course];
    case types.DELETE_COURSE:
      let courseList = state.filter((course) => {
        return course.id !== action.id;
      });
      return courseList;
    case types.UPDATE_COURSE:
      return state.map((course) => {
        return course.id === action.course.id ? action.course : course;
      });
    default:
      return state;
  }
}
