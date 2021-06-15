import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import Header from './header';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const [names, setNames] = useState(
    {
      name: '',
      position: '',
      date: '',
      from: '',
      to: '',
    }

    // 'jude',
    // 'obum',
    // 'grace',
    // 'don',
    //{ firstName: 'John', lastName: 'Doe', age: 50, eyeColor: 'blue' },
    //{ firstName: 'Juud', lastName: 'cole', age: 40, eyeColor: 'grlue' },
  );

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='App'>
      <div className='main'>
        <>
          <Header names={names} />
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label> Name</Form.Label>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Enter Name'
                      name='name'
                      {...register('name', { required: true })}
                    />

                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Position</Form.Label>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Enter Postion'
                      name='position'
                      {...register('position', { required: true })}
                      //ref={register}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={4} md={6} sm={8}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      input
                      type='date'
                      placeholder='Enter Date'
                      name='date'
                      {...register('date', { required: true })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={2} md={3} sm={4}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      input
                      type='time'
                      placeholder='From - To'
                      name='from'
                      {...register('from', { required: true })}
                    />

                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={2} md={3} sm={4}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      input
                      type='time'
                      placeholder='From - To'
                      name='to'
                      {...register('to', { required: true })}
                    />

                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Task 1'
                      name='task1'
                      {...register('task1', { required: true })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Responsibilities</Form.Label>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Task 2'
                      name='task2'
                      {...register('task2', { required: false })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Task 3'
                      name='task3'
                      {...register('task3', { required: false })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Task 4'
                      name='task4'
                      {...register('task4', { required: false })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Task 5'
                      name='task5'
                      {...register('task5', { required: false })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>

                <Col lg={3} md={4} sm={5}>
                  <Form.Group controlId='formBasicEmail'>
                    <Form.Control
                      input
                      type='text'
                      placeholder='Task 6'
                      name='task6'
                      {...register('task6', { required: false })}
                    />
                    <Form.Text className='text-muted'></Form.Text>
                  </Form.Group>
                </Col>
              </Row>

              <Button
                //onSubmit={handleSubmit(onSubmit)}
                variant='primary'
                type='submit'
              >
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
