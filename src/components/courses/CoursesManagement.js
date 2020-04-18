import React, { useState } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

function CoursesManagement({ actions, history }) {
  const [course, setCourse] = useState({
    title: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    actions.createCourse(course);
    history.push("/courses");
  }

  function handleChange(e) {
    setCourse({
      id: Math.random().toString(),
      [e.target.id]: e.target.value,
    });
  }

  return (
    <>
      <h2>Add course</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={course.title}
          onChange={handleChange}
        />
        <button className="btn waves-effect waves-light" type="submit">
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    </>
  );
}

// OLD WAY, VERBOSE WAY
// function mapDispatchToProps(dispatch) {
//     return {
//         createCourse: course => dispatch(courseActions.createCourse(course))
//     }
// }

// bindActionCreators, to save us from having manually wrap our action creators in a dispatch call
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(CoursesManagement);
