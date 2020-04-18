import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function CoursesPage({ courses }) {
  const courseList = courses.map((c) => (
    <tr key={c.id}>
      <td>{c.title}</td>
    </tr>
  ));

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

export default connect(mapStateToProps)(CoursesPage);
