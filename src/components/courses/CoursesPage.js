import React from "react";
import { connect } from "react-redux";

function CoursesPage({ courses }) {
  const courseList = courses.map((c) => (
    <tr key={c.id}>
      <td>{c.title}</td>
    </tr>
  ));

  return (
    <div>
      <h2>Courses</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        odio consectetur molestiae, debitis saepe atque reprehenderit dicta
        dolorum ipsam optio, fugiat architecto aliquam quia assumenda nemo
        aspernatur vero aperiam eaque.
      </p>
      <table className="striped responsive-table centered">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{courseList}</tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

export default connect(mapStateToProps)(CoursesPage);
