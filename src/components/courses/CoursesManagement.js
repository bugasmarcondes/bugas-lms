import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";

function CoursesManagement({ actions, history, ...props }) {
  const [course, setCourse] = useState(props.course);

  useEffect(() => {
    if (props.course === null) {
      history.push("/404");
    }

    setCourse(props.course);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    actions.saveCourse(course);

    history.push("/courses");
  }

  function handleChange(e) {
    setCourse({
      ...course,
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

function mapStateToProps(state, ownProps) {
  let courseId = ownProps.match.params.id;

  if (courseId) {
    var course = state.courses.find((course) => course.id === courseId) || null;
  } else {
    var course = {
      id: null,
      title: "",
    };
  }

  return {
    course,
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesManagement);
