import * as types from "./actionTypes";
import * as api from "../../api/courseApi";

// actions
export function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}

export function deleteCourse(id) {
  return { type: types.DELETE_COURSE, id };
}

export function updateCourse(course) {
  return { type: types.UPDATE_COURSE, course };
}

// thunks
export function loadCourses() {
  return function (dispatch, getState) {
    return api
      .getCourses()
      .then((courses) => {
        dispatch(loadCoursesSuccess(courses));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveCourse(course) {
  return function (dispatch, getstate) {
    return api
      .saveCourse(course)
      .then((savedCourse) => {
        savedCourse.id
          ? dispatch(updateCourse(savedCourse))
          : dispatch(createCourse(savedCourse));
      })
      .catch((error) => {
        throw error;
      });
  };
}
