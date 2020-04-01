import React from "react";

// XXX: Should Header, Part, Content etc be also moved out to separate modules??
const Header = ({ name }) => <h1>{name}</h1>;

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return parts.map(part => <Part key={part.id} part={part} />);
};

const Total = ({ parts }) => {
  return (
    <>
      <p>
        Total of{" "}
        {parts.reduce((sum, part) => {
          return sum + part.exercises;
        }, 0)}{" "}
        exercises
      </p>
    </>
  );
};

const Course = ({ course }) => {
  console.log("course");
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
