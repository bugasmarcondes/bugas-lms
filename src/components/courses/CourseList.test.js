import React from "react";
import CourseList from "./CourseList";
import renderer from "react-test-renderer";

const courses = [];

it("check if message is displayed when no courses are listed yet", () => {
  const tree = renderer.create(<CourseList courses={courses} />);

  expect(tree).toMatchSnapshot();
});
