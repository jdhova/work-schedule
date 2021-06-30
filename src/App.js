import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import Header from './header';
import { useForm } from 'react-hook-form';
import './App.css';
//import Employee from './employee';

const LOCAL_STORAGE_KEY = 'empApp.allValues';

const App = () => {
  const [allValues, setAllValues] = useState([
    {
      name: '',
      position: '',
      date: '',
      from: '',
      to: '',
      task1: '',
      task2: '',
      task3: '',
      task4: '',
      task5: '',
      task6: '',
      complete: false,
    },
  ]);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const storedAllValues = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedAllValues) setAllValues(storedAllValues);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allValues));
  }, [allValues]);

  const toggleValues = (id) => {
    const newValues = [...allValues];
    const value = newValues.find((value) => value.id === id);
    value.complete = !value.complete;
    setAllValues(newValues);
  };

  const onSubmit = (data) => {
    //const data = todoData.current.value;
    if (data === '') return;
    setAllValues((prevAllValues) => {
      return [
        ...prevAllValues,
        {
          name: data.name,
          position: data.position,
          date: data.date,
          from: data.from,
          to: data.to,
          task1: data.task1,
          task2: data.task2,
          task3: data.task3,
          task4: data.task4,
          task5: data.task5,
          task6: data.task6,
        },
      ];
    });
  };

  const changeHandler = (e) => {
    console.log('eeeeee');
    // clear the  history of unchange....
    //... we use the ...allValues to add more staffs..
    //1 create UI 2 add more staffs 3. clear state after adding

    // setAllValues([
    //   {
    //     name: data.name,
    //     position: data.position,
    //     date: data.date,
    //     from: data.from,
    //     to: data.to,
    //     task1: data.task1,
    //     task2: data.task2,
    //     task3: data.task3,
    //     task4: data.task4,
    //     task5: data.task5,
    //     task6: data.task6,
    //   },
    // ]);

    //  why does ths work as an object in an array?
  };

  // const clearValues = () => {
  //   const newValues = allValues.filter((singleValue) => !singleValue.complete);
  //   setAllValues(newValues);
  // };

  return (
    <div className='App'>
      <div className='main'>
        <>
          <Container classname='main'>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label> Name</Form.Label>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Enter Name'
                          name='name'
                          {...register('name', { required: true })}
                          onChange={changeHandler}
                        />

                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Position</Form.Label>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Enter Postion'
                          name='position'
                          {...register('position', { required: true })}
                          //ref={register}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                          input
                          type='date'
                          placeholder='Enter Date'
                          name='date'
                          {...register('date', { required: true })}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>From</Form.Label>
                        <Form.Control
                          input
                          type='time'
                          placeholder='From - To'
                          name='from'
                          {...register('from', { required: true })}
                          onChange={changeHandler}
                        />

                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>To</Form.Label>
                        <Form.Control
                          input
                          type='time'
                          placeholder='From - To'
                          name='to'
                          {...register('to', { required: true })}
                          onChange={changeHandler}
                        />

                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Responsibilities</Form.Label>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Primary Task'
                          name='task1'
                          {...register('task1', { required: true })}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Responsibilities</Form.Label>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Primary Task'
                          name='task2'
                          {...register('task2', { required: false })}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Primary Task'
                          name='task3'
                          {...register('task3', { required: false })}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Secondary Task'
                          name='task4'
                          {...register('task4', { required: false })}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Secondary Task'
                          name='task5'
                          {...register('task5', { required: false })}
                          onChange={changeHandler}
                        />
                        <Form.Text className='text-muted'></Form.Text>
                      </Form.Group>
                    </Col>

                    <Col lg={4} md={5} sm={6}>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Control
                          input
                          type='text'
                          placeholder='Secondary Task'
                          name='task6'
                          {...register('task6', { required: false })}
                          onChange={changeHandler}
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
              </Col>
              <Col>
                <Header allValues={allValues} toggleValues={toggleValues} />
              </Col>
            </Row>
          </Container>
        </>
      </div>
    </div>
  );
};

export default App;

/* <button onclick={clearValues}>Clear</button> */
