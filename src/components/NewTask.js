import React, { useState, useEffect, Fragment } from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Modal from 'react-bootstrap/Modal'
import { getData, postData } from '../services';
import { Link } from 'react-router-dom';

const NewTask = () => {

  const [task, setTask] = useState({
    name:'',
    durationId:'',
    hours:'',
    minutes:'',
    description:'',
    status: 'start'
  })
  const [optionTime, setOptionTime] = useState([])
  const [error, setError] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const getListDuration = async () => {
      const listOption = await getData('duration');
      setOptionTime(listOption)
    }
    getListDuration();
  },[]);

  const onChange = (e) => {
    if(e.target.name === 'duration') {
      setTask({...task,
        'durationId': e.target.value,
        'hours':optionTime[(e.target.value)-1].hours,
        'minutes':optionTime[(e.target.value)-1].minutes,
      })
      return
    }
    setTask({
      ...task,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(
      task.name.trim() ==="" ||
      task.duration < 1 ||
      isNaN(task.hours) ||
      isNaN(task.minutes) ||
      task.description.trim() ===""
    ) {
      setError(true)
      return
    }
     
    postData( 'tasks', task ).then(res=> {
      if(res) {
        setShowModal(true)
      }
    })
  }
  
  return (
    <Fragment>
      <div className="row justify-content-center mt-5">
        <div className="col-sm-12 col-md-12 ">
          <div className=" card">
            { error &&
              <div className="alert alert-danger" role="alert">
                Todos los campos son requeridos
              </div>
            }
            <div className="card-body"> 
              <h2 className="text-center mb-3 font-weight-bold"> 
                Agregar Nueva Tarea
              </h2>
              <FormGroup>
                <TextField 
                  id="name"
                  name="name"
                  value={task.name}
                  label="Nobre de la Tarea"
                  required
                  error={false}
                  onChange={(e)=>onChange(e)}
                />
              <FormControl>
                <InputLabel id="duration">Tiempo</InputLabel>
                <Select
                  labelId="duration"
                  id="duration"
                  name="duration"
                  value={task.durationId}
                  onChange={(e)=>onChange(e)}
                >
                  {
                    optionTime.map((item, index) => 
                      <MenuItem key={index} value={item.value}>{item.label}</MenuItem>
                    )
                  }
                </Select>
              </FormControl>
              </FormGroup>


                <TextField
                  label="Hora"
                  id="hours"
                  name="hours"
                  value={task.hours}
                  required
                  type="number"
                  error={false}
                  onChange={(e)=>onChange(e)}

                />
                <TextField
                  label="Minutos"
                  id="minutes"
                  name="minutes"
                  value={task.minutes}
                  required
                  type="number"
                  error={false}
                  onChange={(e)=>onChange(e)}

                />

                <FormGroup>
                  <TextField
                    id="Description"
                    name="description"
                    value={task.description}
                    label="Descripción"
                    required
                    error={false}
                    multiline
                    rows="3"
                    onChange={(e)=>onChange(e)}
                  />
              </FormGroup>
              <div className="col-md-12 d-flex mt-5 justify-content-center">
                <Button variant="outlined" color="primary" onClick={(e)=> handleSubmit(e)}>
                  Guardar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal}  animation={false}>
        <Modal.Body>Operación Exitosa</Modal.Body>
        <Modal.Footer>
          <Link to={'/'} className="btn btn-primary new-work d-block d-md-inline-block">
            Aceptar
          </Link>
        </Modal.Footer>
      </Modal>
      
    </Fragment>

  );
}

export default NewTask;