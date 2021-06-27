import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Container, Row, Table } from 'react-bootstrap';

const Name = ({ singleValue }) => {
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
      </Table>
    </div>
  );
};

export default Name;
