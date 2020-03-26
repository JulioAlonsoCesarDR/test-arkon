import React from 'react';

const EdidTask = () => {
  return (
    <div className="row justify-content-center mt-5">
      <div className="col-sm-12 col-md-12 ">
        <div className=" card">
          <div className="card-body"> 
            <h2 className="text-center mb-3 font-weight-bold"> 
              Editar Tarea
            </h2> 
            <FormGroup>
                <TextField 
                  id="name"
                  name="name"
                  value=""
                  label="Nobre de la Tarea"
                  required
                  error={false}
                  />
                  <FormControl>
                  <InputLabel id="demo-simple-select-label">Duración</InputLabel>
                    <Select
                      id="time"
                      >
                      <MenuItem value={10}>Corto</MenuItem>
                      <MenuItem value={20}>Medio</MenuItem>
                      <MenuItem value={30}>Largo</MenuItem>
                    </Select>
                  </FormControl>
                <TextField
                  id="Description"
                  name="description"
                  value=""
                  label="Descripción"
                  required
                  error={false}
                  multiline
                  rows="3"
                />
            </FormGroup>
            <div className="col-md-12 d-flex mt-5 justify-content-center">
              <Button variant="outlined" color="primary">
                Guardar Cambios
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListTask;