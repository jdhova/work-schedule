import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';

const Name = ({ singleValue, toggleValues }) => {
  const handleClick = () => {
    toggleValues(singleValue.id);
  };

  return (
    <div>
      <h3>{singleValue.name}</h3>

      <Table>
        <thead>
          <tr>
            <th>{singleValue.position}</th>
            <th>{singleValue.date}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Main Task:</td>
            <td>{singleValue.task1}</td>
            <td>{singleValue.task2}</td>
            <td>{singleValue.task3}</td>
          </tr>
          <tr>
            <td>Seconday Task:</td>
            <td>{singleValue.task4}</td>
            <td>{singleValue.task5}</td>
            <td>{singleValue.task6}</td>
          </tr>
        </tbody>
        <input
          type='checkbox'
          checked={singleValue.complete}
          onChange={handleClick}
        ></input>{' '}
        <br></br>
        Completed
      </Table>
    </div>
  );
};

export default Name;
