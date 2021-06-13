import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import Header from './header';

import './App.css';

function App() {
  const [names, setNames] = useState([
    // 'jude',
    // 'obum',
    // 'grace',
    // 'don',
    { firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' },
    { firstName: 'Juud', lastName: 'cole', age: 40, eyeColor: 'grlue' },
  ]);
  return (
    <div className='App'>
      <div className='main'>
        <>
          <Header names={names} />
          <Container>
            <Form>
              <Row>
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label> Name</Form.Label>
                    <Form.Control type='text' placeholder='Enter Name' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Position</Form.Label>
                    <Form.Control type='text' placeholder='Enter Postion' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control type='date' placeholder='Enter Date' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={3} sm={4}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>From</Form.Label>
                    <Form.Control type='time' placeholder='From - To' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={2} md={3} sm={4}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>To</Form.Label>
                    <Form.Control type='time' placeholder='From - To' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control type='text' placeholder='Roles' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control type='text' placeholder='Roles' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='texxt' placeholder='Roles' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='text' placeholder='Roles' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='text' placeholder='Roles' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control type='texxt' placeholder='Roles' />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Container>
        </>
      </div>
    </div>
  );
}

export default App;
