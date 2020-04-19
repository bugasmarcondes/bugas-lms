import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";
import CourseList from "./CourseList";

function CoursesPage({ courses, actions }) {
  useEffect(() => {
    // check if courses are empty, to prevent from loading everytime we hit f5
    if (courses.length === 0) {
      actions
        .loadCourses()
        .catch((error) => alert("Loading courses failed " + error));
    }
  }, []);

  function handleDelete(id) {
    actions.deleteCourse(id);
  }

  return (
    <>
      <h2>Courses</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        odio consectetur molestiae, debitis saepe atque reprehenderit dicta
        dolorum ipsam optio, fugiat architecto aliquam quia assumenda nemo
        aspernatur vero aperiam eaque.
      </p>
      <p className="right-align">
        <Link
          to="/course"
          className="btn-floating btn-large waves-effect waves-light red"
        >
          <i className="material-icons">add</i>
        </Link>
      </p>
      <CourseList courses={courses} handleDelete={handleDelete} />
    </>
  );
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

// bindActionCreators, to save us from having manually wrap our action creators in a dispatch call
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
