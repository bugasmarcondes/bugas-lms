import React from "react";

const CourseList = ({ courses, handleDelete }) => (
  <table className="striped responsive-table centered">
    <thead>
      <tr>
        <th>Name</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {courses && courses.length > 0 ? (
        courses.map((c) => (
          <tr key={c.id}>
            <td>
              <a href={"/course/" + c.id}>{c.title}</a>
            </td>
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
      )}
    </tbody>
  </table>
);

export default CourseList;
