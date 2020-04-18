import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as courseActions from "../../redux/actions/courseActions";

function CoursesPage({ courses, actions }) {
  const courseList =
    courses && courses.length > 0 ? (
      courses.map((c) => (
        <tr key={c.id}>
          <td>{c.title}</td>
          <td>
            <button
              className="btn waves-effect waves-light"
              onClick={() => handleDelete(c.id)}
            >
              Remove
              <i className="material-icons right">delete</i>
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td>No courses yet!</td>
      </tr>
    );

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
      <table className="striped responsive-table centered">
        <thead>
          <tr>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{courseList}</tbody>
      </table>
    </>
  );
}

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
