import React, { useState, useEffect, Fragment } from 'react';
import { getData, deleteData } from '../services';
import { ButtonGroup, Button } from 'react-bootstrap';
import ModalsComponent from '../containers/ModalsComponent';

const ListTask = () => {

  const [listTask, setListTask] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [ titleModal, setTitleModal] = useState("");
  const [ bodyModal, setbodyModal ] = useState(null);
  const [ actionModal, setActionModal ] = useState(()=>{})


  useEffect( () => {
    const getListDuration = async () => {
      const listData = await getData('tasks');
      setListTask(listData)
    }
    getListDuration();
  },[]);

  const handleAction = (e,id, index, action) => {
    e.preventDefault();
    setShowModal(true)

    switch (action) {

      case 'delete':
        debugger
        setTitleModal("Eliminar")
        setActionModal(()=> {
          deleteData('tasks', id).then((res)=>{
          });
        })

        setbodyModal(()=> {
          return(
          <div>
            <h3> Estás seguro de Eliminar la tarea <b>{listTask[index].name}</b> </h3>
          </div>)
        })

        break;
    
      default:
        break;
    }
  }

  const viewActions = (id, index)=> {
    return (
      <div className="d-flex justify-content-center">
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Comenzar</Button>
          <Button variant="info">Editar</Button>
          <Button variant="danger" onClick={(e)=>handleAction(e, id, index,'delete')}>Eliminar</Button>
        </ButtonGroup>
      </div>
    )
  }
  return (
    <Fragment>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center" scope="col">ID</th>
              <th className="text-center" scope="col">Nombre</th>
              <th className="text-center" scope="col">Descripción</th>
              <th className="text-center" scope="col">Actiones</th>
            </tr>
          </thead>
          <tbody>
            {
              listTask.map((item, index)=>{
                return(
                  <tr key={index}>
                    <th scope="row">{item.id}</th>
                    <td className="text-center" >{item.name}</td>
                    <td className="text-center" >{item.description}</td>
                    <td className="text-center" >{viewActions(item.id, index)}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          showModal && 
          <ModalsComponent showModal={true} title={titleModal} body={bodyModal} aceptAction={()=>actionModal}/>
        }
    </Fragment>
  );
}

export default ListTask;