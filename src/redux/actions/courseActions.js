import * as types from "./actionTypes";

// export function loadCoursesSuccess(courses) {
//   return { type: types.LOAD_COURSES_SUCCESS, courses };
// }

export function createCourse(course) {
  return { type: types.CREATE_COURSE, course };
}
