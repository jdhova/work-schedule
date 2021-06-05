import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  const [name, setName] = useState(['kjsksksk']);
  return (
    <div className='App'>
      <div className='main'>
        <>
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
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='exampleForm.ControlTextarea1'>
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control
                      as='textarea'
                      rows='3'
                      name='address'
                      //onChange={this.handleInputChange}
                    />
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
