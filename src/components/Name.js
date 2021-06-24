import React from 'react';

const Name = ({ singleValue }) => {
  return (
    <div>
      <h3>info</h3>
      {singleValue.name}
      <br></br>
      {singleValue.position}
      <br></br>
      {singleValue.date}
      <br></br>
      {singleValue.from}
      <br></br>
      {singleValue.to}
      <br></br>
      {singleValue.task1}
      <br></br>
      {singleValue.task2}
      <br></br>
      {singleValue.task3}
      <br></br>
      {singleValue.task4}
      <br></br>
      {singleValue.task5}
      <br></br>
      {singleValue.task6}
      <br></br>
    </div>
  );
};

export default Name;
