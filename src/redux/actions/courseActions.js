import * as types from "./actionTypes";

// export function loadCoursesSuccess(courses) {
//   return { type: types.LOAD_COURSES_SUCCESS, courses };
// }

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function deleteCourse(id) {
  return { type: types.DELETE_COURSE, id };
}

export function updateCourse(course) {
  return { type: types.UPDATE_COURSE, course };
}

export function saveCourse(course) {
  return function (dispatch, getstate) {
    if (course.id) {
      return dispatch(updateCourse(course));
    } else {
      // in a real scenario, we would call an api, and it would handle the id creation
      course.id = Math.random().toString();
      return dispatch(createCourse(course));
    }
  };
}
